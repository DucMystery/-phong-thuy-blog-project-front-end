import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup} from '@angular/forms';
import {AngularFireDatabase} from '@angular/fire/database';
import * as firebase from 'firebase';
import {ActivatedRoute, Route, Router} from '@angular/router';
import {AlbumService} from "../../services/albumimage/album.service";
import {IImage} from "../../models/albumimage/IImage";
import {CategoryService} from "../../services/category.service";
import {IAlbum} from "../../models/albumimage/IAlbum";
import {TokenStorageService} from "../../services/tokenStorage.service";
declare const myTest: any;
@Component({
  selector: 'app-album-create',
  templateUrl: './album-create.component.html',
})
export class AlbumCreateComponent implements OnInit {
  myItems: File[] = [];
  categories : any[];
  formGroup = new FormGroup({
    name: new FormControl(),
    status: new FormControl(),
    category: new FormGroup({
        id: new FormControl(),
      }
    ),
    images: new FormArray([
      new FormGroup({
        srcImg: new FormControl(),
      })
    ])
  });
  arrayImage: IImage[] = [];
  message = '';
  isShow = false;
  isSuccess = true;
  isLoading = false;
  isDone = false;
  constructor(  private albumService: AlbumService,
                private categoryService: CategoryService,
                private db: AngularFireDatabase,
                private route: ActivatedRoute,
                private storage: TokenStorageService,
                private router:Router) {}
  ngOnInit(): void {
    this.categoryService.getAll().subscribe(result => {
      this.categories = result;
    });
  }
  save() {
    const album : IAlbum = {
      name :this.formGroup.get('name').value,
      status: this.formGroup.get('status').value,
      account: {
        id: +this.storage.getAccountId()
      },
      category : {
        id: this.formGroup.get('category').value
      }
    };
    album.images = this.arrayImage;
    if (this.isDone === true) {
      this.albumService.save(album).subscribe(result => {
        this.isShow = true;
        this.isSuccess = true;
        this.message = 'Add album success!';
        this.formGroup.reset();
      }, error => {
        this.isShow = true;
        this.isSuccess = false;
        this.message = 'Add album fail!Try again';
        this.formGroup.reset();
      });
      //thuy them code
      this.arrayImage =[];
    }
    this.router.navigate([''])
  }
  uploadFile(event) {
    const files = event.target.files;
    for (let i = 0; i < files.length; i++) {
      this.myItems.push(files[i]);
    }
    this.uploadAll();
  }
  uploadAll() {
    this.isLoading = true;
    Promise.all(
      this.myItems.map(file => this.putStorageItem(file))
    )
      .then((url) => {
        console.log(`All success`, url);
        this.arrayImage = url;
        this.isDone = true;
        this.isLoading = false;
      })
      .catch((error) => {
        console.log(`Some failed: `, error.message);
        this.isLoading = false;
        this.isDone = false;
      });
  }
  putStorageItem(file): Promise<IImage> {
    // the return value will be a Promise
    const metadata = {
      contentType: 'image/jpeg',
    };
    console.log(file);
    return new Promise<IImage>((resolve, reject) => {
      firebase.storage().ref('img/' + Date.now()).put(file, metadata)
        .then(snapshot => {
          snapshot.ref.getDownloadURL().then(downloadURL => {
            const images = {srcImg: downloadURL};
            resolve(images);
          });
        })
        .catch(error => reject(error));
    });
  }
  onClick() {
    myTest();
  }
}

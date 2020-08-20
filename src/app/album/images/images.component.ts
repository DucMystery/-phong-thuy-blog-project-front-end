import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ImageService} from '../../services/albumimage/image.service';
import {IImage} from '../../models/albumimage/IImage';
import {FormBuilder, FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Email} from '../../models/Email';
import {TokenStorageService} from '../../services/tokenStorage.service';
import {IAlbum} from '../../models/albumimage/IAlbum';
import {AlbumService} from '../../services/albumimage/album.service';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {
  public href: string = "";
  shareForm: FormGroup;
  isAccount: boolean = false;
  album: IAlbum;



  images:IImage[];
  constructor(private activatedRoute: ActivatedRoute,private imageService:ImageService,
              private fb: FormBuilder, public client: HttpClient,
              private router : Router,
              private tokenStorageService: TokenStorageService,
              private albumService: AlbumService
              ) {
  }

  id: number;

  ngOnInit(): void {
    this.shareForm = this.fb.group({
      email: ['']
    });
    this.id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.getListImages();
    this.checkAccount();
    this.getAlbum();

  }
  getListImages(){
    this.imageService.getImageDetailList(this.id).subscribe((resp:IImage[])=>{
      this.images=resp;
      console.log(this.images);
    })
  }

  checkAccount(){
    if (this.tokenStorageService.getAccountId() != null){
      this.isAccount = true;
    }
  }

  getAlbum(){
    this.albumService.getAlbum(this.id).subscribe((resp:IAlbum)=>{
      this.album=resp;
      console.log(this.album);
    })
  }







  onSubmit() {
    this.href = window.location.href;
    const data = {
      email: this.shareForm.value.email,
      href : this.href
    };
    this.client.post('http://localhost:8080/sendSimpleEmail', data).subscribe(
      (response: Email) => {
        alert("shared image list" +response);
        this.shareForm.reset();
      }, error => {
        console.log(error);
      }
    );
    // console.log(this.router.url);
    // console.log(window.location.href)


  }




}

import {Component, OnInit} from '@angular/core';

import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ImageService} from "../../services/albumimage/image.service";
import {AlbumService} from "../../services/albumimage/album.service";
import {IAlbum} from "../../models/albumimage/IAlbum";
import {TokenStorageService} from "../../services/tokenStorage.service";

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-create.component.html',
})
export class AlbumCreateComponent implements OnInit {
  createAlbum: FormGroup;
  album: IAlbum;
  imageList: any[];
  rowIndexArray: any[];
  id : number;
  constructor(private fb: FormBuilder,
              private imageService: ImageService,
              private albumService: AlbumService,
              private storage: TokenStorageService
  ) {
  }

  ngOnInit() {
    this.createAlbum = this.fb.group({
      name: ['', Validators.required],
      status: ['']
    });


}

  get name() {
    return this.createAlbum.get('name');
  }
  saveAlbum() {
    let data = this.createAlbum.value;
    this.album = this.createAlbum.value;
    this.album.postDate = new Date()
    this.album.account = this.storage.getAccountId();
    console.log(this.album);
    if (data.status==='Public'){
      this.album.status = true;
    } else {
      this.album.status = false;
    }
    this.albumService.save(this.album).subscribe( data =>{
      this.storage.saveAlbumId(data.id);

    });


    this.imageService.getImageDetailList(this.album.id, ).subscribe(responseFromImage => {
      this.imageList = responseFromImage;
    })

  }
  submit() {

  }


}

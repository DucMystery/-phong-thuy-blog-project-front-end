import { Component, OnInit } from '@angular/core';
import {ImageService} from "../../services/albumimage/image.service";

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit {
  createAlbum : FormData;
  imageList: any[];
  rowIndexArray: any[];

  constructor(private service: ImageService) { }

  ngOnInit() {
    this.service.imageDetailList.snapshotChanges().subscribe(
      list => {
        this.imageList = list.map(item => { return item.payload.val(); });
        this.rowIndexArray =  Array.from(Array(Math.ceil((this.imageList.length+1) / 3)).keys());
      }
    );
  }
  submit(){

  }


}

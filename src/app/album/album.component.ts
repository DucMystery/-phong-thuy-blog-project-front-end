import { Component, OnInit } from '@angular/core';
import {ImageService} from "../services/albumimage/image.service";

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  constructor(private service:ImageService) { }

  ngOnInit() {
    this.service.getImageDetailList();
  }

}

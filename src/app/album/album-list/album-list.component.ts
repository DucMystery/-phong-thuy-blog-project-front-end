import {Component, OnInit} from '@angular/core';
import {IAlbum} from '../../models/albumimage/IAlbum';
import {AlbumService} from '../../services/albumimage/album.service';
import {Router} from '@angular/router';
import {TokenStorageService} from '../../services/tokenStorage.service';
import {IUser} from '../../models/IUser';
import {AccountService} from '../../services/account.service';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css']
})
export class AlbumListComponent implements OnInit {

  albums: IAlbum[];
  account:IUser;
  constructor(private albumService: AlbumService, private router: Router, private storage: TokenStorageService,private userService:AccountService) {
  }

  id: number;
  albumId:number;

  ngOnInit(): void {
    this.id= +this.storage.getAccountId();
    this.getAlbums();
    this.getAccount();

  }

  getAlbums() {
    this.albumService.getAlbums(this.id).subscribe((resp: IAlbum[]) => {
      this.albums = resp;
      this.albums.map(album=>{
        album.postTime = new Date(album.postTime);
      })
    });
    console.log(this.albums);
  }

  getAccount(){
    this.userService.findAccountById(this.id).subscribe((resp:IUser)=>{
      this.account=resp;
    })
  }

}

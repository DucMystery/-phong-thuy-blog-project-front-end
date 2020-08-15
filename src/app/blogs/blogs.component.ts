import {Component, OnInit} from '@angular/core';
import {BlogService} from '../services/blog.service';
import {IBlog} from '../models/iblog';
import {pipe} from 'rxjs';
import {TokenStorageService} from "../services/tokenStorage.service";
import {AccountService} from '../services/account.service';
import {IUser} from '../models/IUser';


@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {

  constructor(
              ) {
  }

  ngOnInit(): void {
  }

}

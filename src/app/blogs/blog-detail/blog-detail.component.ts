import { Component, OnInit } from '@angular/core';
import {$} from 'protractor';
import {Iblog} from '../../interface/iblog';
import {ActivatedRoute} from '@angular/router';
import {BlogService} from '../../services/blog.service';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {
  blog:Iblog=null;

  constructor(private activatedRoute:ActivatedRoute,private blogService:BlogService) { }

  blogId=+this.activatedRoute.snapshot.paramMap.get('id');

  ngOnInit(): void {
    this.getBlogById();

  }
  getBlogById(){
    this.blogService.getBlogById(this.blogId).subscribe((resp:Iblog)=>{
      this.blog=resp;
      console.log("ok");
    })
  }


}

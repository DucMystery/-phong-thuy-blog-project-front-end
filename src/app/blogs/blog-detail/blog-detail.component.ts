import {Component, OnInit} from '@angular/core';
import {$} from 'protractor';
import {ActivatedRoute} from '@angular/router';
import {BlogService} from '../../services/blog.service';
import {IBlog} from '../../models/iblog';
import {CommentService} from '../../services/comment.service';
import {Icomment} from '../../models/icomment';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {TokenStorageService} from '../../services/tokenStorage.service';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {
  blog: IBlog = null;
  comments: Icomment[];
  commentForm: FormGroup = new FormGroup({
    id: new FormControl(''),
    time: new FormControl(''),
    content: new FormControl(''),
    account: new FormControl(''),
    blog: new FormControl('')
  });

  idBlog: number;
  idAccount: number;


  constructor(private activatedRoute: ActivatedRoute,
              private blogService: BlogService,
              private commentService: CommentService,
              private fb: FormBuilder,
              private storage: TokenStorageService
  ) {
  }

  blogId = +this.activatedRoute.snapshot.paramMap.get('id');

  ngOnInit(): void {
    this.getBlogById();
    this.getAllComment();
  }

  getBlogById() {
    this.blogService.getBlogById(this.blogId).subscribe((resp: IBlog) => {
      this.blog = resp;
      console.log('ok');
    });
  }


  //display all the comments
  getAllComment() {
    this.commentService.getAllCommentByBlog(this.blogId).subscribe((resp: Icomment[]) => {
      this.comments = resp;
      console.log(this.comments);
    });
  }


  postComment() {
    let date=new Date();

    const comment: Icomment = {
      content: this.commentForm.value.content,
      time: date.getDate(),
      account:{
        id:this.storage.getAccountId()
      },
      blog: {
        id: this.blogId
      }
    };

    this.commentService.saveComment(comment).subscribe((resp:Icomment)=>{
      console.log('-----------------------------');
    });
  }
}

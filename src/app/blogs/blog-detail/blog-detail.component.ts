import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {BlogService} from '../../services/blog.service';
import {IBlog} from '../../models/iblog';
import {CommentService} from '../../services/comment.service';
import {Icomment} from '../../models/icomment';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {TokenStorageService} from '../../services/tokenStorage.service';
import {ILike} from '../../models/iLike';
import {LikeService} from '../../services/like.service';

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

  // idBlog: number;
  idAccount: number;

  like: ILike;
  likeNumber:number;


  constructor(private activatedRoute: ActivatedRoute,
              private blogService: BlogService,
              private commentService: CommentService,
              private fb: FormBuilder,
              private storage: TokenStorageService,
              private route: Router,
              private likeService: LikeService
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
      console.log(resp);

    });
  }

  //display all the comments
  getAllComment() {
    this.commentService.getAllCommentByBlog(this.blogId).subscribe((resp: Icomment[]) => {

      this.comments = resp;
      // @ts-ignore
      document.getElementById("comment"+this.blogId).innerHTML=resp;

      console.log(this.comments)

    });
  }

  postComment() {
    let date = new Date();

    const comment: Icomment = {
      content: this.commentForm.value.content,
      time: date.getDate(),
      account: {
        id: this.storage.getAccountId()
      },
      blog: {
        id: this.blogId
      }
    };
    this.commentService.saveComment(comment).subscribe((resp: Icomment) => {
      this.getAllComment();
    });
  }


  likeSubmit() {
    const likes: ILike = {

      account: {
        id: this.storage.getAccountId()
      },
      blog: {
        id: this.blogId

      }
    };
    this.likeService.likeSubmit(likes).subscribe((resp: ILike) => {
      this.like = resp;
      this.getLikeByBlog();
      // console.log(this.like);
    });
  }

  getLikeByBlog() {
    this.likeService.getLikeByBlog(this.blogId).subscribe((resp: IBlog) => {
      document.getElementById('like'+this.blogId).innerHTML=String(resp.amountOfLikes);
      console.log(this.likeNumber);
    });
  }
}

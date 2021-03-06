import {Component, OnInit} from '@angular/core';
import {BlogService} from '../services/blog.service';
import {IBlog} from '../models/iblog';
import {pipe} from 'rxjs';
import {TokenStorageService} from "../services/tokenStorage.service";
import {AccountService} from '../services/account.service';
import {IUser} from '../models/IUser';

declare var $: any;

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {
  blogs: IBlog[] ;
  isLoggedIn: boolean;
  avatarUrl: string;
  account: IUser;
  id: number;

  constructor(private blogService: BlogService,
              private storage: TokenStorageService,
              private accountService: AccountService
              ) {}

  ngOnInit(): void {
    this.getAllBlogs();
    this.findAccount();
    this.isLoggedIn= this.storage.getStatusLoggedOrLogout();
    this.avatarUrl = this.storage.getUserAvartar();

  }

  findAccount(){
    this.id = +this.storage.getAccountId();
    this.accountService.findAccountById(this.id).subscribe( data => {
      this.account = data;
      console.log(data);
    })
  }
  // getAllAccounts(){
  //   this.accountService.getAllAccount().subscribe((response: IUser[])=>{
  //     this.accounts = response;
  //   })
  // }

  // getPostTimeToString(postTime): string{
  //   // @ts-ignore
  //   let date = new Date(postTime);
  //   let string = date.toDateString();
  //   string = string.slice(4);
  //   return string;
  // }

  getAllBlogs() {
    this.blogService.getAllBlogByTime().subscribe((resp: IBlog[]) => {
      this.blogs = resp;
      this.blogs.map(blog =>{
        blog.postTime = new Date(blog.postTime);
      })
      $(function() {
        var i = 0;
        $('.ftco-animate').waypoint(function(direction) {

          if (direction === 'down' && !$(this.element).hasClass('ftco-animated')) {

            i++;

            $(this.element).addClass('item-animate');
            setTimeout(function() {

              $('body .ftco-animate.item-animate').each(function(k) {
                var el = $(this);
                setTimeout(function() {
                  var effect = el.data('animate-effect');
                  if (effect === 'fadeIn') {
                    el.addClass('fadeIn ftco-animated');
                  } else if (effect === 'fadeInLeft') {
                    el.addClass('fadeInLeft ftco-animated');
                  } else if (effect === 'fadeInRight') {
                    el.addClass('fadeInRight ftco-animated');
                  } else {
                    el.addClass('fadeInUp ftco-animated');
                  }
                  el.removeClass('item-animate');
                }, k * 50, 'easeInOutExpo');
              });

            }, 100);

          }

        }, {offset: '95%'});
        var loader = function() {
          setTimeout(function() {
            if($('#ftco-loader').length > 0) {
              $('#ftco-loader').removeClass('show');
            }
          }, 1);
        };
        loader();
      });
      // console.log(this.blogs);
    });
  }

}

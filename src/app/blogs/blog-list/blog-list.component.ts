import { Component, OnInit } from '@angular/core';
import {IBlog} from '../../models/iblog';
import {IUser} from '../../models/IUser';
import {BlogService} from '../../services/blog.service';
import {TokenStorageService} from '../../services/tokenStorage.service';
import {AccountService} from '../../services/account.service';

declare var $: any;

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {

  blogs: any[];
  isLoggedIn: boolean;
  avatarUrl: string;
  accounts: IUser[];
  constructor(private blogService: BlogService,
              private storage: TokenStorageService,
  ) {
  }

  ngOnInit(): void {
    this.getAllBlogs();
    console.log(this.blogs)
    this.isLoggedIn= this.storage.getStatusLoggedOrLogout();
    this.avatarUrl = this.storage.getUserAvartar();
  }

  getAllBlogs() {
    this.blogService.getAllBlogByTime().subscribe((resp: any[]) => {
      this.blogs = resp;
      console.log(this.blogs);
      this.blogs.map(blog =>{

        blog.postTime = new Date(blog.postTime);
      }
      )
     console.log(this.blogs);

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
      })
    });
  }

}

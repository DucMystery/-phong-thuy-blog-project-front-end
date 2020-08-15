import { Component, OnInit } from '@angular/core';
import {IBlog} from '../../models/iblog';
import {BlogService} from '../../services/blog.service';
import {TokenStorageService} from '../../services/tokenStorage.service';
import {ActivatedRoute} from '@angular/router';
declare var $: any;
@Component({
  selector: 'app-blog-user',
  templateUrl: './blog-user.component.html',
  styleUrls: ['./blog-user.component.css']
})
export class BlogUserComponent implements OnInit {

  id: number;
  blogs: IBlog[];
  avatarUrl: string;
  isLoggedIn: boolean;
  constructor(private blogService: BlogService,
              private storageToken: TokenStorageService,
              private route: ActivatedRoute) {
    this.id = +this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.getAllBlogByIdAccount();
    this.isLoggedIn= this.storageToken.getStatusLoggedOrLogout();
    this.avatarUrl = this.storageToken.getUserAvartar();
  }

  getAllBlogByIdAccount(){
    console.log(this.id);
    console.log(this.storageToken);
    if (this.storageToken.getAccountId() != this.id) {
      this.blogService.getAllBlogByAccount_Id(this.id).subscribe((response: any[]) => {
        this.blogs = response;
        this.blogs.map(blog => {
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
              if ($('#ftco-loader').length > 0) {
                $('#ftco-loader').removeClass('show');
              }
            }, 1);
          };
          loader();
        })
      })
    }else {
      this.blogService.getAllBlogById(this.id).subscribe((response: any[]) => {
        this.blogs = response;
        this.blogs.map(blog => {
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
              if ($('#ftco-loader').length > 0) {
                $('#ftco-loader').removeClass('show');
              }
            }, 1);
          };
          loader();
        })
      })

    }
  }

}

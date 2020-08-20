import {Component, OnInit} from '@angular/core';
import {IBlog} from '../../models/iblog';
import {IUser} from '../../models/IUser';
import {BlogService} from '../../services/blog.service';
import {TokenStorageService} from '../../services/tokenStorage.service';
import {AccountService} from '../../services/account.service';
import {CategoryService} from '../../services/category.service';
import {CommentService} from '../../services/comment.service';
import {Icomment} from '../../models/icomment';
import {Observable} from 'rxjs';
import {IBlogResponse} from '../../models/iblog-response';

declare var $: any;

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {

  blogs: IBlogResponse[];
  isLoggedIn: boolean;
  avatarUrl: string;
  accounts: IUser[];
  account: IUser;
  categories: any[];
  countCategory: number[];
  indexOfBlogs: number = 0;
  blogListOfCategory: any[];
  isAccountTrue: boolean[];

  page: number = 1;
  private id: number;

  constructor(private blogService: BlogService,
              private storage: TokenStorageService,
              private categoryService: CategoryService,
              private commentService: CommentService,
              private accountService: AccountService
  ) {
  }

  ngOnInit(): void {

    this.getAllBlogs();
    this.getAllCategories();
    this.findAccount();
    console.log(this.blogs);
    this.isLoggedIn = this.storage.getStatusLoggedOrLogout();
    this.avatarUrl = this.storage.getUserAvartar();
  }


  getAllBlogs() {
    this.blogService.getAllBlogByTime().subscribe((resp: IBlogResponse[]) => {
      this.blogs = resp;
      this.blogs.map(blog => {
          debugger
          blog.postTime = new Date(blog.postTime);
          if (blog.accountId == this.storage.getAccountId()) {
            blog['active'] = true;
            return blog;
          } else {
            blog['active'] = false;
            return blog;
          }
        }
      );
      $(function() {
        var loader = function() {
          setTimeout(function() {
            if ($('#ftco-loader').length > 0) {
              $('#ftco-loader').removeClass('show');
            }
          }, 1);
        };
        loader();
      });
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
      });
    });
  }

  findAccount() {
    this.id = +this.storage.getAccountId();
    this.accountService.findAccountById(this.id).subscribe(data => {
      this.account = data;
      console.log(data);
    });
  }

  getAllCategories() {
    this.categoryService.getAll().subscribe((response: any[]) => {
      this.categories = response;
    });
  }

  changePage(event) {
    this.page = event;

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
    });
  }
}

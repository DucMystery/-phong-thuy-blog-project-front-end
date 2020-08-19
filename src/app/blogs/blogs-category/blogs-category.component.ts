import { Component, OnInit } from '@angular/core';
import {IBlog} from '../../models/iblog';
import {BlogService} from '../../services/blog.service';
import {TokenStorageService} from '../../services/tokenStorage.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {CategoryService} from '../../services/category.service';
import {IBlogResponse} from '../../models/iblog-response';
import {AccountService} from '../../services/account.service';
import {IUser} from '../../models/IUser';
declare var $: any;
@Component({
  selector: 'app-blogs-category',
  templateUrl: './blogs-category.component.html',
  styleUrls: ['./blogs-category.component.css']
})
export class BlogsCategoryComponent implements OnInit {

  id: number;
  blogs: IBlogResponse[];
  avatarUrl: string;
  isLoggedIn: boolean;
  categories: any[];
  page: number = 1;
  account: IUser;
  constructor(private blogService: BlogService,
              private storageToken: TokenStorageService,
              private route: ActivatedRoute,
              private categoryService: CategoryService,
              private accountService: AccountService) {
    this.route.paramMap.subscribe((pramMap: ParamMap)=>{
      this.id = +pramMap.get('id');
      this.getAllBlogByCategoryId(this.id);
    })
  }

  ngOnInit(): void {
    this.getAllCateories();
    this.findAccount();
    this.isLoggedIn= this.storageToken.getStatusLoggedOrLogout();
    this.avatarUrl = this.storageToken.getUserAvartar();
  }

  getAllCateories(){
    this.categoryService.getAll().subscribe((response:any[]) =>{
      this.categories = response;
    })
  }
  findAccount(){
    this.id = +this.storageToken.getAccountId();
    this.accountService.findAccountById(this.id).subscribe( data => {
      this.account = data;
      console.log(data);
    })
  }

  getAllBlogByCategoryId(id){
      this.blogService.getAllBlogByCategoryId(id).subscribe((response: IBlogResponse[]) => {
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

  changePage(event){
    this.page = event;

    $(function(){
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
    })
  }
}

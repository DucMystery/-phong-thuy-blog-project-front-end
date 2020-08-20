import {Component, OnInit} from '@angular/core';
import {ICategory} from '../../models/icategory';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {CategoryService} from '../../services/category.service';
import {BlogService} from '../../services/blog.service';
import {IBlog} from '../../models/iblog';
import {TokenStorageService} from '../../services/tokenStorage.service';
import {IUser} from '../../models/IUser';
import {AccountService} from '../../services/account.service';
import {Observable} from 'rxjs';
declare var $: any;
@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.css']
})
export class BlogEditComponent implements OnInit {
  myArray: Array<boolean> = [true, false];
  myDefault: Boolean = this.myArray[0];
  account: Observable<any> = this.accountService.findAccountById(this.tokenStorageService.getAccountId());
  categories: ICategory[];
  blog: IBlog ;
  blogEditForm: FormGroup = new FormGroup({
    status: new FormControl(''),
    title: new FormControl(''),
    content: new FormControl(''),
    category: new FormControl(''),
    // postTime: new FormControl('')
  });
  constructor(private fb: FormBuilder,
              private router: Router,
              private route: ActivatedRoute,
              private categoryService: CategoryService,
              private blogService: BlogService,
              private tokenStorageService: TokenStorageService,
              private accountService: AccountService) {
  }
  id = +this.route.snapshot.paramMap.get('id');
  ngOnInit(): void {
    this.categoryService.getAll().subscribe((resp: ICategory[]) => {
      this.categories = resp;
    });
    if (this.tokenStorageService.getAccountId() != null) {
      this.findById();
    } else {
      this.router.navigate(['/blogs/error']);
    }
  }
  findById() {
    this.blogService.getBlogById(this.id).subscribe((resp: IBlog) => {
      this.blogEditForm.patchValue(resp);
      $(function() {
        $('#summernote').summernote('code', resp.content);
      });
    });
  }

  update() {
    if (this.blogEditForm.valid) {
      var markupStr = $('#summernote').summernote('code');
      const blog: IBlog = {
        id: this.id,
        title: this.blogEditForm.value.title,
        content: markupStr,
        status: this.blogEditForm.value.status,
        amountOfLikes: this.blogEditForm.value.amountOfLikes,
        category: {
          id: this.blogEditForm.value.category
        }
      };
      this.blogService.updateBlog(this.id, blog).subscribe(data => {
        this.router.navigate(['/blogs/list']);
      });
    }
  }
}

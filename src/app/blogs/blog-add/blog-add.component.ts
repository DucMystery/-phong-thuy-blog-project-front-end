import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {ICategory} from '../../models/icategory';
import {BlogService} from '../../services/blog.service';
import {CategoryService} from '../../services/category.service';
import {Router} from '@angular/router';
import {IBlog} from '../../models/iblog';
import {TokenStorageService} from '../../services/tokenStorage.service';
import {AccountService} from '../../services/account.service';
import {IUser} from '../../models/IUser';

declare var $: any;

@Component({
  selector: 'app-blog-add',
  templateUrl: './blog-add.component.html',
  styleUrls: ['./blog-add.component.css']
})
export class BlogAddComponent implements OnInit {
  categories: ICategory[];
  blogForm: FormGroup = new FormGroup({
    status: new FormControl(''),
    title: new FormControl(''),
    content: new FormControl(''),
    category: new FormControl(''),
    account: new FormControl(''),


  });

  idAccount: number;
  myArray: Array<boolean> = [true, false];
  myDefault: Boolean = this.myArray[0];


  constructor(private fb: FormBuilder,
              private blogService: BlogService,
              private storageService: TokenStorageService,
              private accountService: AccountService,
              private categoryService: CategoryService,
              private router: Router) {
  }

  ngOnInit(): void {
    // this.blogForm = new FormGroup({'status': new FormControl(this.myDefault)});
    this.blogForm.value.status = this.myDefault;
    this.categoryService.getAll().subscribe((response: ICategory[]) => {
      this.categories = response;
    });
    $(function() {
      $('#summernote').summernote();
    });
  }

  submit() {
    if (this.blogForm.valid) {
      var markupStr = $('#summernote').summernote('code');
      this.idAccount = +this.storageService.getAccountId();
      const blog: IBlog = {
        status: this.blogForm.value.status,
        title: this.blogForm.value.title,
        content: markupStr,
        category: {
          id: this.blogForm.value.category
        },
        account: {
          id: this.idAccount
        }
      };
      this.blogService.createBlog(blog).subscribe(data => {
        console.log(data);
        this.router.navigate(['/blogs']);
      });
    }
  }

}

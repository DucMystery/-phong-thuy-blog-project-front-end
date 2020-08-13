import { Component, OnInit } from '@angular/core';
import {ICategory} from '../../models/icategory';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {CategoryService} from '../../services/category.service';
import {BlogService} from '../../services/blog.service';
import {IBlog} from '../../models/iblog';

declare var $: any;
@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.css']
})
export class BlogEditComponent implements OnInit {

  myArray: Array<boolean> = [true,false];
  myDefault: Boolean = this.myArray[0];

  categories: ICategory[];
  blogEditForm: FormGroup = new FormGroup({
    status: new FormControl(''),
    title: new FormControl(''),
    content: new FormControl(''),
    category: new FormControl(''),
    account: new FormControl(''),
    // postTime: new FormControl('')


  });
  constructor(private fb: FormBuilder,
              private router: Router,
              private route: ActivatedRoute,
              private categoryService: CategoryService,
              private blogService: BlogService) {
  }
  id = +this.route.snapshot.paramMap.get('id');

  ngOnInit(): void {
    this.categoryService.getAll().subscribe((resp: ICategory[]) =>{
      this.categories =resp
    })
    this.findById();
    $(function() {
      $('#summernote').summernote();
    });
  }

  findById(){
    this.blogService.getBlogById(this.id).subscribe((resp: IBlog) =>{
      this.blogEditForm.patchValue(resp);
    })
  }

  update() {
    if (this.blogEditForm.valid){
      var markupStr = $('#summernote').summernote('code');
      const blog: IBlog = {
        id: this.id,
        title: this.blogEditForm.value.title,
        content: markupStr,
        status: this.blogEditForm.value.status,
        category: {
          id: this.blogEditForm.value.category
        },
        account: {
          id: 2
        }
      }
      this.blogService.updateBlog(this.id,blog).subscribe(data =>{
        this.router.navigate(['/blogs'])
      });
    }
  }

}

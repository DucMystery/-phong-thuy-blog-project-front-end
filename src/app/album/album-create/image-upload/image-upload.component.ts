import { Component, OnInit } from '@angular/core';
import {finalize} from "rxjs/operators";
import {AngularFireStorage} from "@angular/fire/storage";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ImageService} from "../../../services/albumimage/image.service";
import {ICategory} from "../../../models/icategory";
import {CategoryService} from "../../../services/category.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-album-create',
  templateUrl: './image-upload.component.html',
})
export class ImageUploadComponent implements OnInit {
  srcimage: string;
  selectedImage: any = null;
  isSubmitted: boolean;
  categories: ICategory[];
  formTemplate = new FormGroup({
    caption: new FormControl('', Validators.required),
    category: new FormControl(''),
    srcimage: new FormControl('', Validators.required)
  })

  constructor(
    private storage: AngularFireStorage,
    private imageService: ImageService,
   private categoryService: CategoryService,
    protected router: ActivatedRoute
              ) { }

  ngOnInit() {
   this.categoryService.getAll().subscribe(response =>{
     this.categories = response;
     console.log(response);
   });
    this.resetForm();
  }

  showPreview(event: any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => this.srcimage = e.target.result;
      reader.readAsDataURL(event.target.files[0]);
      this.selectedImage = event.target.files[0];
    }
    else {
      this.srcimage = '../../../assets/img/image_placeholder.jpg';
      this.selectedImage = null;
    }
  }

  onSubmit(formValue) {
    this.isSubmitted = true;
    if (this.formTemplate.valid) {
      var filePath = `${formValue.category}/${this.selectedImage.name.split('.').slice(0, -1).join('.')}_${new Date().getTime()}`;
      const fileRef = this.storage.ref(filePath);
      this.storage.upload(filePath, this.selectedImage).snapshotChanges().pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe((url) => {
            formValue['srcimage'] = url;

            this.resetForm();
          })
        })
      ).subscribe();
    }
  }

  get formControls() {
    return this.formTemplate['controls'];
  }

  resetForm() {
    this.formTemplate.reset();
    this.formTemplate.setValue({
      caption: '',
      imageUrl: '',
      category: ''
    });
    this.srcimage = '../../../assets/img/image_placeholder.jpg';
    this.selectedImage = null;
    this.isSubmitted = false;
  }

}

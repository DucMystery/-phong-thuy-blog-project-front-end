import {Component, OnInit} from '@angular/core';

import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from "../../services/auth.service";
import {IUser} from "../../models/IUser";
import {Router} from "@angular/router";


@Component({
  selector: 'app-regitration',
  templateUrl: './regitration.component.html',
  styleUrls: ['./regitration.component.css']
})
export class RegitrationComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private route: Router ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      nickName: ['', Validators.required],
      birthDay: ['', Validators.required],
      phoneNumber:['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, {
      validator: MustMatch('password', 'confirmPassword')
    });

    function MustMatch(controlName: string, matchingControlName: string) {
      return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];

        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
          // return if another validator has already found an error on the matchingControl
          return;
        }

        // set error on matchingControl if validation fails
        if (control.value !== matchingControl.value) {
          matchingControl.setErrors({ mustMatch: true });
        } else {
          matchingControl.setErrors(null);
        }
      }
    }
  }

// Goi f de ngan gon hon
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
     const dataJson = this.registerForm.value;
    this.authService.register(dataJson).subscribe(result=>{
      console.log(result);
      alert('REGISTER SUCCCESSS ! \n\n' + "Respon form htttp " +JSON.stringify(result))
      this.route.navigate(['auth/login'])
    })
  }

}

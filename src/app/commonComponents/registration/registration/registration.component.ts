import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  hide: boolean;
  loginForm: FormGroup;
  nameFormControl = new FormControl('', [
      Validators.required
  ]);
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  passwordFormControl = new FormControl('', [
    Validators.required
  ]);
  type: any = 'password';
  constructor() { }

  ngOnInit(): void {
    this.loginForm = new FormGroup( {
      name: this.nameFormControl,
      email: this.emailFormControl,
      password: this.passwordFormControl
    });
  }
  logValues(formGroup: FormGroup): void{
    console.log(formGroup.controls.name.value);
    console.log(formGroup.controls.email.value);
    console.log(formGroup.controls.password.value);
  }
  togglePassword(){
    this.type = this.type === 'password' ? 'text' : 'password';
  }
}

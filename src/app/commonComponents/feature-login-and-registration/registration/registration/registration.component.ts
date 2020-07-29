import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {LoginAndRegistrationService} from '../../login-and-registration/login-and-registration.service';
import {ApiService} from '../../../../dj-store/api-service/api.service';
import {Router} from '@angular/router';

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
  constructor(public loginAndRegistrationService: LoginAndRegistrationService,
              public apiService: ApiService,
              private router: Router) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup( {
      name: this.nameFormControl,
      email: this.emailFormControl,
      password: this.passwordFormControl
    });
  }
  createUser(formGroup: FormGroup): void{
    const user = {name: formGroup.controls.name.value,
                email: formGroup.controls.email.value,
                password: formGroup.controls.password.value};
    console.log(user);
    this.apiService.createAccount(user).subscribe();
    this.router.navigate(['home']);
  }
  togglePassword(){
    this.type = this.type === 'password' ? 'text' : 'password';
  }
}

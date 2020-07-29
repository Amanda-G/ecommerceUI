import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {LoginAndRegistrationService} from '../../login-and-registration/login-and-registration.service';
import {ApiService} from '../../../../dj-store/api-service/api.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    hide: boolean;
    loginForm: FormGroup;
    emailFormControl = new FormControl('', [
        Validators.required,
        Validators.email,
    ]);
    passwordFormControl = new FormControl('', [
        Validators.required
    ]);
    checkboxFormControl = new FormControl('');
    type: any = 'password';

    constructor(public loginAndRegistrationService: LoginAndRegistrationService,
                public apiService: ApiService,
                private router: Router) {
    }

    ngOnInit(): void {
        this.loginForm = new FormGroup({
            email: this.emailFormControl,
            password: this.passwordFormControl,
            checkbox: this.checkboxFormControl
        });
    }

    verifyLogin(formGroup: FormGroup): void {
        console.log(formGroup.controls.checkbox.value);
        this.apiService.getAccount(formGroup.controls.email.value).subscribe((data: any[]) => {
            if (data[0].password === formGroup.controls.password.value) {
                this.router.navigate(['home']);
            }
        });
    }

    togglePassword() {
        this.type = this.type === 'password' ? 'text' : 'password';
    }
}

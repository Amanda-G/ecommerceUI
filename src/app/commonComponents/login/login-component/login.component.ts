import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators} from '@angular/forms';

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
    constructor() {
    }
    ngOnInit(): void {
        this.loginForm = new FormGroup({
            email: this.emailFormControl,
            password: this.passwordFormControl,
            checkbox: this.checkboxFormControl
        });
    }
    logValues(formGroup: FormGroup): void{
        console.log(formGroup.controls.email.value);
        console.log(formGroup.controls.password.value);
        console.log(formGroup.controls.checkbox.value);
    }

    togglePassword(){
        this.type = this.type === 'password' ? 'text' : 'password';
    }
}

import {Component, OnInit} from '@angular/core';
import {LoginAndRegistrationService} from '../login-and-registration.service';

@Component({
    selector: 'app-login-and-registration',
    templateUrl: './login-and-registration.component.html',
    styleUrls: ['./login-and-registration.component.scss']
})
export class LoginAndRegistrationComponent implements OnInit {
    radioButtonValue: 'registration' | 'sign in' = 'sign in';

    constructor(public loginAndRegistrationService: LoginAndRegistrationService) {
    }

    ngOnInit(): void {
    }

}

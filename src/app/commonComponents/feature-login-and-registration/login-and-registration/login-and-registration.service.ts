import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LoginAndRegistrationService {
    selectedComponent = 'login';
    constructor() {
    }
    switchPage() {
        this.selectedComponent = this.selectedComponent === 'login' ? 'registration' : 'login';
    }
}

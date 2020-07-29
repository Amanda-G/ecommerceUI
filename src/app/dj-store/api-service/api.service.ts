import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    localNodeServer = 'http://localhost:3000/';

    constructor(private httpClient: HttpClient) {
    }

    createAccount(user) {
        const postUrl = this.localNodeServer + 'users';
        return this.httpClient.post(`${postUrl}`, user);
    }

    getAccount(userEmail: string) {
        const postUrl = this.localNodeServer + 'users';
        return this.httpClient.get(`${postUrl}`, {
            params: {
                email: userEmail
            }
        });
    }
}

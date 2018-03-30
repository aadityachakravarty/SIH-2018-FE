import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LoginService {

  userLoggedIn = new Subject();

  constructor(private httpClient: HttpClient) { }

  onGet() {
    this.httpClient.get('https://api.nvixion.tech/').subscribe(
      (data) => {
        console.log(data);
      }
    );
  }

  onLogin(loginData) {
    return this.httpClient.post('https://api-egn.nvixion.tech/auth/login', loginData);
  }

  onLogOut() {
    return this.httpClient.get('https://api-egn.nvixion.tech');
  }

  onSignUp(signUpData) {
    return this.httpClient.post('https://api-egn.nvixion.tech/auth/register', signUpData);
  }



}

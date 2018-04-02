import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { AsyncLocalStorage } from 'angular-async-local-storage';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  loginForm: FormGroup;
  isLoggedIn: boolean;
  constructor(private loginService: LoginService, private router: Router, private localStorage: AsyncLocalStorage, private httpClient: HttpClient) { }
  ngOnInit() {
    this.loginForm = new FormGroup({
      'username': new FormControl(null),
      'password': new FormControl(null)
    });

    this.localStorage.getItem('user').subscribe(
      (userlocal) => {
        if (userlocal) {
          this.isLoggedIn = true;
          this.loginService.userLoggedIn.next(true);
        } else {
          this.isLoggedIn = false;
        }
      }
    );
  }

  onLogin() {
    console.log(this.loginForm.value);
    this.isLoggedIn = true;
    this.loginService.onLogin(this.loginForm.value).subscribe(
      response => {
        const responseData = JSON.parse(JSON.stringify(response));
        console.log(responseData);
        if (responseData.success) {

          this.httpClient.get('https://api-egn.nvixion.tech/auth/status', {headers: new HttpHeaders({'x-access-token': responseData.token})}).subscribe(
            (authStatus) => {
              const safeAuthStatus = JSON.parse(JSON.stringify(authStatus));
              console.log(safeAuthStatus);
              this.loginService.userType.next('a');
              this.localStorage.setItem('user', {email: safeAuthStatus.data.email, token: responseData.token, type: safeAuthStatus.data.type, username: this.loginForm.get(['username']).value}).subscribe(
                (localData) => {
                  console.log(localData);
                });
            }
          );
          this.loginService.userLoggedIn.next(true);
          this.router.navigate(['consumer/home']);
        }
      },
      error => {
        console.log(error);
      },
    );



  }
}

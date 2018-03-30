import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { AsyncLocalStorage } from 'angular-async-local-storage';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  loginForm: FormGroup;
  isLoggedIn: boolean;
  constructor(private loginService: LoginService, private router: Router, private localStorage: AsyncLocalStorage) { }
  ngOnInit() {
    this.loginForm = new FormGroup({
      'username': new FormControl(null),
      'password': new FormControl(null)
    });
    this.isLoggedIn = false;
  }

  onLogin() {
    console.log(this.loginForm.value);
    this.isLoggedIn = true;
    this.loginService.onLogin(this.loginForm.value).subscribe(
      response => {
        const responseData = JSON.parse(JSON.stringify(response));
        if ( responseData.success === true ) {
          this.loginService.userLoggedIn.next(this.isLoggedIn); // it will echo the logged in status
          this.router.navigate(['consumer/home']);
          this.localStorage.setItem('user', { email: responseData.email, token: responseData.token}).subscribe(
            (data) => console.log(data)
          );
        }
        console.log(response);
      },
      error => {
        console.log(error);
      },
    );



  }
}

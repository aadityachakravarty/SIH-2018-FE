import { Component, OnInit } from '@angular/core';
import { LoginService } from '../auth/login.service';
import { Router } from '@angular/router';
import { AsyncLocalStorage } from 'angular-async-local-storage';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userType = 'consumer';
  loggedIn: boolean;
  constructor(private loginService: LoginService, private router: Router, private localStorage: AsyncLocalStorage) {}

  ngOnInit() {
    this.loginService.userLoggedIn.subscribe(
      (logIn: boolean) => {
        this.loggedIn = logIn;
      }
    );

    this.localStorage.getItem('user').subscribe(
      (data) => {
        if (data.token) {
          this.loggedIn = true;
        } else {
          this.loggedIn = false;
        }
      }
    )
  }

  onSignOut() {
    this.loginService.onLogOut().subscribe(
      response => {
        this.loggedIn = false;
        this.loginService.userLoggedIn.next(this.loggedIn);
        this.router.navigate(['/']);
        this.localStorage.removeItem('user').subscribe(
          (data) => {
            console.log(data);
            console.log('signedOutToken');
          }
        );
        console.log(response);
      },
      error => {
        console.log(error);
      }
    );
  }
}

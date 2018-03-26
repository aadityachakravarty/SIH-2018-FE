import { Component, OnInit } from '@angular/core';
import { LoginService } from '../auth/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userType = 'consumer';
  loggedIn: boolean;
  constructor(private loginService: LoginService) {}

  ngOnInit() {
    this.loginService.userLoggedIn.subscribe(
      (logIn: boolean) => {
        this.loggedIn = logIn;
      }
    );
  }

  onSignOut() {
    this.loggedIn = false;
  }
}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  loginForm: FormGroup;
  isLoggedIn: boolean;
  constructor(private loginService: LoginService, private router: Router) { }
  ngOnInit() {
    this.loginForm = new FormGroup({
      'logInEmail': new FormControl(null, [Validators.email]),
      'logInPassword': new FormControl(null)
    });
    this.isLoggedIn = false;
  }

  onLogin() {
    this.isLoggedIn = true;
    this.loginService.userLoggedIn.next(this.isLoggedIn);
    this.router.navigate(['consumer/home']);
    console.log(this.loginForm);
  }
}

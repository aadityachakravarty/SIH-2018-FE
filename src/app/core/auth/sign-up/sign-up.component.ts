import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signInForm: FormGroup;
  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
    this.signInForm = new FormGroup({
      fullName: new FormControl(null),
      userName: new FormControl(null),
      email: new FormControl(null, [Validators.email]),
      phone: new FormControl(null),
      passEnter: new FormControl(null),
      passConfirm: new FormControl(null)
    });
  }

  onSignUp() {
    this.loginService.onSignUp(this.signInForm.value).subscribe(
      response => {
        console.log(response);
        const responseData = JSON.parse(JSON.stringify(response));
        if (responseData.success ) {
          this.router.navigate(['consumer/home']);
          this.loginService.userLoggedIn.next(true);
        } else if ( !responseData.success ) {
          this.signInForm.reset();
          console.log('signUpFailed');
        }
      }
    );
  }

}

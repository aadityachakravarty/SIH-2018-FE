import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { HttpClient } from '@angular/common/http';
import { LoginService } from '../core/auth/login.service';
import { AsyncLocalStorage } from 'angular-async-local-storage';

@Injectable()
export class ConsumerService {

  myApplications[]; //it contains all application of user


  setApplication = new Subject(); // it will echo all the applications

  constructor(private httpClient: HttpClient, private localStorage: AsyncLocalStorage) {}

  onMyApplication() {
    this.localStorage.getItem('user').subscribe(
      (data) => {
        if (data.token) {
          this.httpClient.post('https://api-egn.nvixion.tech/connection/mycon', data).subscribe(
            (response) => {
              console.log(response);
            }
          );
        }
      }
    );
    this.setApplication.next(this.myApplications.slice(0));
  }
}

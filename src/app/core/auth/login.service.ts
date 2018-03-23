import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class LoginService {

  userLoggedIn = new Subject();
  constructor() { }

}

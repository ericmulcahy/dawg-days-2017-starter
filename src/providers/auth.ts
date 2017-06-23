import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class Auth {

  constructor() {
    console.log('Hello Auth Provider');
  }

  signin(credentials) {
    return Promise.resolve({uid: '123456', email: credentials.email});
  }
}

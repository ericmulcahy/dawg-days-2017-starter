import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {AngularFireAuth} from "angularfire2/auth";

@Injectable()
export class Auth {

  constructor(private afAuth: AngularFireAuth) {
    console.log('Hello Auth Provider');
  }

  signin(credentials) {
    return Promise.resolve({uid: '123456', email: credentials.email});
  }

  createAccount(email, password) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then(data => {
        console.log('successfully created an account! ', data);
      });
  }
}

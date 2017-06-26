import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {AngularFireAuth} from "angularfire2/auth";

@Injectable()
export class Auth {

  constructor(private afAuth: AngularFireAuth) {
    console.log('Hello Auth Provider');
  }

  signin(credentials) {
    return this.afAuth.auth.signInWithEmailAndPassword(credentials.email, credentials.password);
  }

  createAccount(email, password) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then(data => {
        console.log('successfully created an account! ', data);
      });
  }

  currentAuthState() {
    return this.afAuth.authState;
  }
}

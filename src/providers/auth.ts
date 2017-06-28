import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {AngularFireAuth} from "angularfire2/auth";
import {AngularFireDatabase} from "angularfire2/database";

@Injectable()
export class Auth {

  constructor(private afAuth: AngularFireAuth, private afDatabase: AngularFireDatabase) {
    console.log('Hello Auth Provider');
  }

  signin(credentials) {
    return this.afAuth.auth.signInWithEmailAndPassword(credentials.email, credentials.password);
  }

  createAccount(email, password) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then(data => {
        console.log('successfully created an account! ', data);
        this.createUserRecord(email, data.uid);
      });
  }

  currentAuthState() {
    return this.afAuth.authState;
  }

  createUserRecord(email: string, uid: any) {
    let currentUserRef = this.afDatabase.database.ref(`/users/${uid}`);
    currentUserRef.set({ email: email, uid: uid, displayName: email });
  }

}

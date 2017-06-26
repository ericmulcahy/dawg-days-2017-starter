import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

// This is only used for declaring the firebase.User type on the Observable
import {Auth} from "../../providers/auth";

@Component({
  selector: 'page-about',
  templateUrl: 'account.html'
})
export class AccountPage {

  firebaseUser: any;

  constructor(public navCtrl: NavController, private auth: Auth) {
    auth.currentAuthState().subscribe((data) => {
      this.firebaseUser = data;
    });
  }

}

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {FirebaseListObservable} from "angularfire2/database";
import {UserProvider} from "../../providers/user-provider";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  users: FirebaseListObservable<any[]>;

  constructor(public navCtrl: NavController, private userProvider: UserProvider) {
    this.users = this.userProvider.getAllUsers();
  }

  openChat(user) {
    console.log('user ' + user.displayName + ' clicked!');
  }

}

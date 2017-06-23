import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {TabsPage} from "../tabs/tabs";

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
  }

  signin() {
    console.log('Sign In clicked!');
    this.navCtrl.push(TabsPage);
  }

  createAccount() {
    console.log('Create account clicked!');
    this.navCtrl.push(TabsPage);
  }
}

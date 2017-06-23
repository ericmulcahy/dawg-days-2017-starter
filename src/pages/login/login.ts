import { Component } from '@angular/core';
import {AlertController, NavController, NavParams} from 'ionic-angular';
import {TabsPage} from "../tabs/tabs";
import {Auth} from "../../providers/auth";

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  email: string = "";
  password: string = "";

  constructor(private navCtrl: NavController,
              private navParams: NavParams,
              private auth: Auth,
              private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
  }

  signin() {
    this.auth.signin({ email: this.email, password: this.password }).then((data) => {
      console.log('success! login data:', data);
      this.navCtrl.push(TabsPage);
    }).catch((error) => {
      let alert = this.alertCtrl.create({
        title: 'Nope!',
        message: error.message ? error.message : error.toString(),
        buttons: ['Dismiss']
      });
      alert.present();
    });
  }

  createAccount() {
    console.log('Create account clicked!');
    this.navCtrl.push(TabsPage);
  }
}

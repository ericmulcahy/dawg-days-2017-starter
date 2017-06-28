import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {LoginPage} from "../pages/login/login";
import {Auth} from "../providers/auth";
import {AccountPage} from "../pages/account/account";
import {AngularFireAuthModule} from "angularfire2/auth";
import {AngularFireModule} from "angularfire2";
import {AngularFireDatabaseModule} from "angularfire2/database";
import {UserProvider} from "../providers/user-provider";

export const firebaseConfig = {
  apiKey: "AIzaSyADq7Yy283TsNxxs8x-hXfD1k3lyeJQDZI",
  authDomain: "dawg-chat.firebaseapp.com",
  databaseURL: "https://dawg-chat.firebaseio.com",
  projectId: "dawg-chat",
  storageBucket: "dawg-chat.appspot.com",
  messagingSenderId: "959884748484"
};

@NgModule({
  declarations: [
    MyApp,
    AccountPage,
    HomePage,
    TabsPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AccountPage,
    HomePage,
    TabsPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Auth,
    UserProvider
  ]
})
export class AppModule {}

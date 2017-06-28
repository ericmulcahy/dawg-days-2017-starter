import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {AngularFireDatabase} from "angularfire2/database";

@Injectable()
export class UserProvider {
  constructor(private afDatabase: AngularFireDatabase) {
    console.log('Hello User Provider');
  }

  getAllUsers() {
    return this.afDatabase.list('/users');
  }
}

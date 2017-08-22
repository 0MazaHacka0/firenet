import { Injectable } from '@angular/core';

import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class UserService {

  constructor(private db: AngularFireDatabase) { }

  getAllUsers() {
    return this.db.object('users');
  }

  getUser(uid: string) {
    console.log(this.db.object(`users/${uid}`));
    return this.db.object(`users/${uid}`);
  }

}

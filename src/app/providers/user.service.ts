import { Injectable } from '@angular/core';

import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class UserService {

  constructor(private db: AngularFireDatabase) { }

  getAllUsers() {
    return this.db.list('users');
  }

  getUser(uid: string) {
    return this.db.object(`users/${uid}`);
  }

  getAllMessages(uid: string) {
    return this.db.list(`messages/${uid}`);
  }

  sendMessage(senderUid: string, recipientUid: string, message: string) {
    this.db.object(`messages/${recipientUid}/${Date.now()}`).set(
      {
        'senderUid': senderUid,
        'message': message,
        'timestamp': Date.now(),
      }
    );
  }
}

import { Injectable } from '@angular/core';
import { AngularFireAuth, AngularFireAuthModule } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {
  user: Observable<firebase.User>;

  constructor(public afAuth: AngularFireAuth) {
    this.user = afAuth.authState;
  }
  /**
   * Logs in the user
   * @returns {firebase.Promise<FirebaseAuthState>}
   */
  loginWithGoogle() {
    return this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
  loginWithGithub() {
    return this.afAuth.auth.signInWithPopup(new firebase.auth.GithubAuthProvider());
  }
  /**
   * Logs out the current user
   */
  logout() {
    return this.afAuth.auth.signOut();
  }

  getUser() {
    return this.user;
  }
}

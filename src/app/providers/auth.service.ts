import { Injectable } from '@angular/core';
import { AngularFireAuth, AngularFireAuthModule } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
  user: Observable<firebase.User>;
  uid$: Observable<string>;

  constructor(public afAuth: AngularFireAuth) {
    this.user = afAuth.authState;
    this.uid$ = afAuth.authState.map(user => user.uid);
  }

  signIn(provider: firebase.auth.AuthProvider): firebase.Promise<any> {
    return this.afAuth.auth.signInWithPopup(provider).then(function(){
    });
  }

  signInWithGithub(): firebase.Promise<any> {
    return this.signIn(new firebase.auth.GithubAuthProvider());
  }

  signInWithGoogle(): firebase.Promise<any> {
    return this.signIn(new firebase.auth.GoogleAuthProvider());
  }

  signOut(): void {
    this.afAuth.auth.signOut();
  }

  // Get logged in user
  getUser() {
    return this.user;
  }

  getUid() {
    return this.uid$;
  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AF } from './providers/af';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public isLoggedIn: Boolean;
  public user_displayName: String;
  public user_email: String;
  constructor(public authService: AF, private router: Router) {
    this.authService.afAuth.authState.subscribe(
      (auth) => {
        if (auth == null) {
          console.log('Logged out');
          this.isLoggedIn = false;
          this.user_displayName = '';
          this.user_email = '';
          this.router.navigate(['login']);
        } else {
          this.isLoggedIn = true;
          this.user_displayName = auth.displayName;
          this.user_email = auth.email;
          console.log('Logged in');
          console.log(auth);
          this.router.navigate(['']);
        }
      }
    );
  }
}

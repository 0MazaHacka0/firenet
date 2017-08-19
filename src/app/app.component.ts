import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { AuthService } from './providers/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public authService: AuthService, private router: Router) {
    this.authService.afAuth.authState.subscribe(
      (auth) => {
        if (auth == null) {
          console.log('Logged out');
          this.router.navigate(['login']);
        } else {
          console.log('Logged in');
          console.log(auth);
          this.router.navigate(['']);
        }
      }
    );
  }
}

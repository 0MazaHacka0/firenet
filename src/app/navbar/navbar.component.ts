import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../providers/auth.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public authService: AuthService, public router: Router) { }

  ngOnInit() {
  }

  loginWithGoogle() {
    this.authService.loginWithGoogle().then(data => {
      this.router.navigate(['']);
    });
  }
  loginWithGithub() {
    this.authService.loginWithGithub().then(data => {
      this.router.navigate(['']);
    });
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['']);
  }

}

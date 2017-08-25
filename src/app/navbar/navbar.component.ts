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

  signInWithGoogle() {
    this.authService.signInWithGoogle().then(data => {
      this.router.navigate(['']);
    });
  }

  signInWithGithub() {
    this.authService.signInWithGithub().then(data => {
      this.router.navigate(['']);
    });
  }

  signOut() {
    this.authService.signOut();
    this.router.navigate(['']);
  }

}

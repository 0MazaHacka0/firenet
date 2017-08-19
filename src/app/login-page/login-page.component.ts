import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AF } from "../providers/af";
@Component({
  selector: "app-login-page",
  templateUrl: "./login-page.component.html",
  styleUrls: ["./login-page.component.css"]
})
export class LoginPageComponent implements OnInit {
  constructor(public authService: AF, private router: Router) {}
  ngOnInit() {}
  loginWithGoogle() {
    this.authService.loginWithGoogle().then(data => {
      this.router.navigate([""]);
    });
  }
  loginWithGithub() {
    this.authService.loginWithGithub().then(data => {
      this.router.navigate([""]);
    });
  }
}

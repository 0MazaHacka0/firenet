import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AF } from "../providers/af";
@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.css"]
})
export class HomePageComponent implements OnInit {
  constructor(private authService: AF, private router: Router) {}
  ngOnInit() {}
  logout() {
    this.authService.logout();
    this.router.navigate(["login"]);
  }
}

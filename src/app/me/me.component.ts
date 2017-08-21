import { Component, OnInit } from '@angular/core';
import { AuthService } from '../providers/auth.service';

@Component({
  selector: 'app-me',
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.css']
})
export class MeComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input('user') user: Observable<firebase.User>;

  constructor() { }

  ngOnInit() {
  }

}

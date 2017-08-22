import { Component, OnInit } from '@angular/core';
import { UserService } from '../providers/user.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: FirebaseListObservable<any>;
  constructor(private userService: UserService) {
    this.users = userService.getAllUsers();
    console.log(this.users);
  }

  ngOnInit() {
  }

}

import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { FirebaseListObservable } from 'angularfire2/database';
import * as firebase from 'firebase/app';

import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { UserService } from '../providers/user.service';
import { AuthService } from '../providers/auth.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() user: Observable<firebase.User>;

  uid = '';
  user_uid = '';
  private subscription: Subscription;

  constructor(
    private activateRoute: ActivatedRoute,
    private userService: UserService,
    private authService: AuthService
  ) {
    this.subscription = activateRoute.params.subscribe(
      (params) => {
        this.uid = params['uid'];
        this.user = this.userService.getUser(this.uid);
      });
    this.authService.getUser().subscribe(snapshot => {
      if (snapshot) {
        this.user_uid = snapshot.uid;
      }
    });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}

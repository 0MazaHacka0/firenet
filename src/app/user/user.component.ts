import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

import { ActivatedRoute} from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { UserService } from '../providers/user.service';
import { AuthService } from '../providers/auth.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: Observable<firebase.User>;

  private uid: string;
  private subscription: Subscription;

  constructor(private activateRoute: ActivatedRoute, private US: UserService, private AS: AuthService) { 

    this.subscription = activateRoute.params.subscribe(params=>this.uid=params['uid']);
    this.user = this.US.getUser(this.uid);

  }

  ngOnInit() {
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}

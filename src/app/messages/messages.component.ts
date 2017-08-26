import { Component, OnInit, Input } from '@angular/core';

import { UserService } from '../providers/user.service';
import { AuthService } from '../providers/auth.service';

import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  @Input() recipientUid: string;
  private senderUid: string;
  messages: FirebaseListObservable<any>;

  constructor(
    public userService: UserService,
    public authService: AuthService
  ) { }

  ngOnInit() {
    this.authService.getUser().subscribe(user => {
      if (user) {
        this.senderUid = user.uid;
      }
    });
    this.messages = this.userService.getAllMessages(this.recipientUid);
  }

  create(message: string) {
    this.userService.sendMessage(this.senderUid, this.recipientUid, message);
  }
}

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
  private messages: FirebaseListObservable<any>;

  constructor(private userService: UserService, private authService: AuthService) {
    this.messages = userService.getAllMessages(this.recipientUid);
    this.authService.getUser().subscribe(snapshot => {
      this.senderUid = snapshot.uid;
    });
  }

  ngOnInit() {
  }

  create(message: string) {
    this.userService.sendMessage(this.senderUid, this.recipientUid, message);
  }
}

import { Component, OnInit, Input } from '@angular/core';

import { UserService } from '../../providers/user.service';

@Component({
  selector: 'app-message-item',
  templateUrl: './message-item.component.html',
  styleUrls: ['./message-item.component.css']
})
export class MessageItemComponent implements OnInit {

  @Input() message: any;
  senderUser;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.senderUser = this.userService.getUser(this.message.senderUid);
  }

}

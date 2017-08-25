import { Component, OnInit, Input } from '@angular/core';

import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {

  @Input() messages: FirebaseListObservable<any>;

  constructor() { }

  ngOnInit() {
  }

}

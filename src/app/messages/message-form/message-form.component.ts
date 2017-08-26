import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-message-form',
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.css']
})
export class MessageFormComponent implements OnInit {

  @Output() create: EventEmitter<string> = new EventEmitter();

  message = '';

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    this.create.emit(this.message);
  }

}

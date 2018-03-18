import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  name: string;

  constructor() { }
  ngOnInit() {
  }
  @ViewChild('content') public contentModal;

  show(value: string) {
    this.name = value;
    this.contentModal.show();
  }
}

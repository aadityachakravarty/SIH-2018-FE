import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-your-applications',
  templateUrl: './your-applications.component.html',
  styleUrls: ['./your-applications.component.css']
})
export class YourApplicationsComponent implements OnInit {
  yourApplicationsData = [
    { name: 'Anshul Sharma', connectionAddress: 'L-482, Ram Lal Chowk, Model Town, Panipat, Haryana' },
    { name: 'Anshul Sharma', connectionAddress: 'L-482, Ram Lal Chowk, Model Town, Panipat, Haryana' },
    { name: 'Anshul Sharma', connectionAddress: 'L-482, Ram Lal Chowk, Model Town, Panipat, Haryana' },
    { name: 'Anshul Sharma', connectionAddress: 'L-482, Ram Lal Chowk, Model Town, Panipat, Haryana' }
  ];
  constructor() { }

  ngOnInit() {
  }

}

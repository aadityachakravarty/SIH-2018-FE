import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-application-list',
  templateUrl: './application-list.component.html',
  styleUrls: ['./application-list.component.css']
})
export class ApplicationListComponent implements OnInit {
  applicationList = [
    { name: 'Anshul Sharma', connectionAddress: 'L-482, Ram Lal Chowk, Model Town, Panipat, Haryana' },
    { name: 'Anshul Sharma', connectionAddress: 'L-482, Ram Lal Chowk, Model Town, Panipat, Haryana' },
    { name: 'Anshul Sharma', connectionAddress: 'L-482, Ram Lal Chowk, Model Town, Panipat, Haryana' },
    { name: 'Anshul Sharma', connectionAddress: 'L-482, Ram Lal Chowk, Model Town, Panipat, Haryana' }
  ];
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  onSelectApplication(index: number) {
    this.router.navigate([index], {relativeTo: this.route});
  }

}

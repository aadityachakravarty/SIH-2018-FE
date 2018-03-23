import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee-applications-list',
  templateUrl: './employee-applications-list.component.html',
  styleUrls: ['./employee-applications-list.component.css']
})
export class EmployeeApplicationsListComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }


  onView(index: number) {
    this.router.navigate(['../', index], {relativeTo: this.route});
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-application',
  templateUrl: './update-application.component.html',
  styleUrls: ['./update-application.component.css']
})
export class UpdateApplicationComponent implements OnInit {
  updateOptionDropdown = 'Select Option';
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    if (this.updateOptionDropdown === 'Select Option') {
      this.router.navigate(['consumer/update-application']);
    }
  }

  onChangeName(data: string) {
    this.updateOptionDropdown = data;
    this.router.navigate(['change-name/list'], {relativeTo: this.route});
    console.log(this.route);
  }

  onChangeLoad(data: string) {
    this.updateOptionDropdown = data;
    this.router.navigate(['change-load/list'], {relativeTo: this.route});
  }

  onCloseConnection(data: string) {
    this.updateOptionDropdown = data;
    this.router.navigate(['close-application/list'], {relativeTo: this.route});

  }

}

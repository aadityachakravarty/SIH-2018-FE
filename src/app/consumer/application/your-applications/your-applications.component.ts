import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConsumerService } from '../../consumer.service';

@Component({
  selector: 'app-your-applications',
  templateUrl: './your-applications.component.html',
  styleUrls: ['./your-applications.component.css']
})
export class YourApplicationsComponent implements OnInit {
  yourApplicationsData;
  constructor(private router: Router, private route: ActivatedRoute, private consumerService: ConsumerService) { }

  ngOnInit() {
    this.consumerService.onMyApplication().subscribe(
      (data) => {
        console.log(data);
        this.yourApplicationsData = data;
      }
    );
  }

  onViewApplication(id: number) {
    this.router.navigate([id], {relativeTo: this.route});
  }

}

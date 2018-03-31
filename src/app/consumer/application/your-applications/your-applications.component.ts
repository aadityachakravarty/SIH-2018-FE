import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConsumerService } from '../../consumer.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AsyncLocalStorage } from 'angular-async-local-storage';

@Component({
  selector: 'app-your-applications',
  templateUrl: './your-applications.component.html',
  styleUrls: ['./your-applications.component.css']
})
export class YourApplicationsComponent implements OnInit {
  yourApplicationsData;
  constructor(private router: Router, private localStorage: AsyncLocalStorage, private httpClient: HttpClient, private route: ActivatedRoute, private consumerService: ConsumerService) { }

  ngOnInit() {
    this.localStorage.getItem('user').subscribe(
      (userLocal) => {
        console.log(userLocal);
        this.httpClient.post('https://api-egn.nvixion.tech/employee/apps', userLocal.token, {headers: new HttpHeaders({
            'x-access-token': userLocal.token
          })}).subscribe(
          (response) => {
            console.log(response);
            this.yourApplicationsData = response;
          }
        );
      }
    );
  }

  onViewApplication(id: number) {
    this.router.navigate([id], {relativeTo: this.route});
  }

  onTracking(index) {
    this.router.navigate(['/consumer-tracking', index]);
  }
}

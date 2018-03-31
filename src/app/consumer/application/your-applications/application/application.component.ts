import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ConsumerService } from '../../../consumer.service';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent implements OnInit {
  closeConnectionData;
  constructor(private route: ActivatedRoute, private consumerService: ConsumerService) { }
  id: number;
  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
      }
    );
    console.log(this.id);

    this.consumerService.onMyApplication().subscribe(
      (data) => {
        this.closeConnectionData = data[this.id];
      }
    );
  }

}

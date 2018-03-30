import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-main-home',
  templateUrl: './main-home.component.html',
  styleUrls: ['./main-home.component.css']
})
export class MainHomeComponent implements OnInit {
  costEstimationForm: FormGroup;
  mapOrigin: any;
  mapDestination: any;
  mapUrl: string;
  safeMapUrl: any;
  onMapShow = false;


  constructor(private sanatizer: DomSanitizer) { }

  ngOnInit() {
    this.costEstimationForm = new FormGroup({
      'estimateConnectionAddress': new FormControl(null),
      'estimateLoadDemand': new FormControl(null)
    });
  }

  onEstimateSubmit() {
    console.log(this.costEstimationForm.value);
    //To set the map origin and destination for cost estimation.
    this.mapUrl = '//www.google.com/maps/embed/v1/directions?origin=' + this.mapOrigin.lat + ',' + this.mapOrigin.lng +
      '&destination=' + this.mapDestination.lat + ',' + this.mapDestination.lng +
      '&key=AIzaSyCTxHU9LQsmd2QU2Fkiqq1i0G4hav6zM8E';
    this.safeMapUrl = this.sanatizer.bypassSecurityTrustResourceUrl(this.mapUrl);
  //To set the map origin and destination for cost estimation.
    this.onMapShow = true;
  }

}

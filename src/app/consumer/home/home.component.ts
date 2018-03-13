import { Component, OnInit } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
public map: position = { lat: 0, lng: 0 };
    lat: number;
    lng: number;

  constructor() { }

  ngOnInit() {
    this.getUserLocation()
  }
  
      private getUserLocation() {
     /// locate the user
     if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
         this.lat = position.coords.latitude;
         this.lng = position.coords.longitude;

       });
     }
     }
}


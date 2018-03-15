import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
    lat: number;
    lng: number;
    dir: any;
    
    markers: marker[] = [
        {
            name:'one',
            lat: 29.489934,
            lng: 79.327594
        }
    ]

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
     
     public clickedMarker(markers:marker, index:number){
        this.getDirection(markers.lat, markers.lng);
     }
     
     public getDirection(latitude: number, longitude: number) {
    this.dir = {
      origin: { lat: this.lat, lng: this.lng },
      destination: { lat: latitude, lng: longitude }
    }
  }
}

interface marker{
    name?: string;
    lat: number;
    lng: number;
}

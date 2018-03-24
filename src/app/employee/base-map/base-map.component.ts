import { Component, OnInit } from '@angular/core';

interface Marker {
  name?: string;
  lat: number;
  lng: number;
}

@Component({
  selector: 'app-base-map',
  templateUrl: './base-map.component.html',
  styleUrls: ['./base-map.component.css']
})
export class BaseMapComponent implements OnInit {

  constructor() { }
  lat: number;
  lng: number;
  dir: any;

  markers: Marker[] = [
    {
      name: 'one',
      lat: 29.489934,
      lng: 79.327594
    }
  ]
  ngOnInit() {
    this.getUserLocation();
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

  public clickedMarker(markers: Marker, index: number ) {
    this.getDirection(markers.lat, markers.lng);
    this.calculateDistance(markers.lat, markers.lng);
  }

  public getDirection(latitude: number, longitude: number) {
    this.dir = {
      origin: { lat: this.lat, lng: this.lng },
      destination: { lat: latitude, lng: longitude }
    };
  }

  public calculateDistance( latitude: number, longitude: number) {
    const nyc = new google.maps.LatLng(this.lat, this.lng);
    const london = new google.maps.LatLng(latitude, longitude);
    const distance = google.maps.geometry.spherical.computeDistanceBetween(nyc, london);
    console.log(distance);
  }

}

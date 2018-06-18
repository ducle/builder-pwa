import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-home-map',
  templateUrl: './home-map.component.html',
  styleUrls: ['./home-map.component.scss']
})
export class HomeMapComponent implements OnInit, OnChanges {
  lat: Number = 42.956305;
  lng: Number = -78.6916818;
  zoom: Number = 12;
  @Input() mapData: any = {};
  constructor() {}

  ngOnInit() {}
  ngOnChanges() {
    this.lat = this.mapData.homeLat || this.lat ;
    this.lng = this.mapData.homeLong || this.lng;
  }
}

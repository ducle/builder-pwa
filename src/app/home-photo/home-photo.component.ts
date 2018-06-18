import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'app-home-photo',
  templateUrl: './home-photo.component.html',
  styleUrls: ['./home-photo.component.scss']
})
export class HomePhotoComponent implements OnInit, OnChanges {
  myInterval = 0;
  @Input() photoData: any;
  @Output() callShowGalerry = new EventEmitter();
  images = [];
  constructor() {}

  ngOnInit() {
    const images = this.photoData.cardImages || []
    this.images = images.slice(0,6);
  }
  ngOnChanges() {
    const images = this.photoData.cardImages || []
    this.images = images.slice(0,6);
  }
}

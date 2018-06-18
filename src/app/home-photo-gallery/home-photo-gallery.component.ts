import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-home-photo-gallery',
  templateUrl: './home-photo-gallery.component.html',
  styleUrls: ['./home-photo-gallery.component.scss']
})
export class HomePhotoGalleryComponent implements OnInit {
  config: SwiperConfigInterface = {
    direction: 'horizontal',
    slidesPerView: 1,
    pagination: true
  };
  @Input() images: any;
  @Input() indexImage = 0;
  @Output() callCloseGallery = new EventEmitter();
  constructor() {}

  ngOnInit() {}
}

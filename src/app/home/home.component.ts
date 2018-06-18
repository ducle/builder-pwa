import { Component, OnInit, ViewChild, AfterViewInit, HostListener } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { CardService } from '../services/card.service';
import { SwiperDirective } from 'ngx-swiper-wrapper';

const arrayNavigation = [0, 1, 2, 3, 4];
const imageArray = [
  'assets/images/one.jpg',
  'assets/images/two.jpg',
  'assets/images/three.jpg',
  'assets/images/four.jpg',
  'assets/images/five.jpg',
  'assets/images/six.jpg'
];
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  activeTab = 0;
  isShowGallery = false;
  images = imageArray;
  imageGalleryIndex = 0;
  config = null;
  homeData: any = {};
  photoData: any = {};
  featureData: any = {};
  mapData: any = {};
  contactData: any = {};
  setNewHeight = false;
  hideForNoData = true;
  card_id = '';
  @ViewChild(SwiperDirective) directiveRef: SwiperDirective;
  @HostListener('window:resize')
  onResize() {
    if (window.innerHeight > 400 && this.setNewHeight) {
      this.focusedInputOut();
    }
  }
  constructor(private cardService: CardService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap
      .switchMap((params: ParamMap) => {
        this.card_id = params.get('id');
        return this.cardService.getCard(+params.get('id'));
      })
      .subscribe(card => {
        if (!card.length) {
          this.hideForNoData = true;
        } else {
          this.hideForNoData = false;
          this.homeData = card[0];
          this.photoData = card[1];
          this.featureData = card[2];
          this.mapData = card[3];
          this.contactData = card[4];
          this.contactData.timing = this.homeData.timing;
        }
      });
  }
  ngAfterViewInit() {
    if (this.directiveRef) {
      this.directiveRef.config = { loop: true };
      this.directiveRef.update();
    }
  }
  navigatonSection(next = true) {
    const index = this.activeTab;
    const nextIndex = arrayNavigation.length > index + 1 ? index + 1 : 0;
    this.activeTab = nextIndex;
    this.directiveRef.setIndex(nextIndex);
  }
  callShowGalerry({ status, index }) {
    this.isShowGallery = status;
    this.imageGalleryIndex = index;
  }
  changeIndexTab(event) {
    if (event !== 4) {
      this.setNewHeight = false;
    }
    this.activeTab = event;
  }
  setIndexTab(index) {
    this.directiveRef.setIndex(index);
  }
  callCloseGallery() {
    this.isShowGallery = false;
  }
  focusedInput() {
    this.setNewHeight = true;
    this.directiveRef.update();
  }
  focusedInputOut() {
    this.setNewHeight = false;
  }
}

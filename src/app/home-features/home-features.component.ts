import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home-features',
  templateUrl: './home-features.component.html',
  styleUrls: ['./home-features.component.scss']
})
export class HomeFeaturesComponent implements OnInit {
  @Input() featureData: any = {};
  constructor() {}

  ngOnInit() {}
}

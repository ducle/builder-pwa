import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header-general-info',
  templateUrl: './header-general-info.component.html',
  styleUrls: ['./header-general-info.component.scss']
})
export class HeaderGeneralInfoComponent implements OnInit {
  @Input() data: any = {};
  constructor() { }

  ngOnInit() {
  }

}

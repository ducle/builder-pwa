import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-home-contact',
  templateUrl: './home-contact.component.html',
  styleUrls: ['./home-contact.component.scss']
})
export class HomeContactComponent implements OnInit {
  @Output() focusedInput = new EventEmitter();
  @Output() focusedInputOut = new EventEmitter();
  @Input() contactData: any = {};
  constructor() {}
  ngOnInit() {}
}

import {Component, HostBinding, Input, OnInit} from '@angular/core';

@Component({
  selector: 'et-card',
  templateUrl: './et-card.component.html',
  styleUrls: ['./et-card.component.scss'],
})
export class EtCardComponent implements OnInit {
  @Input()
  @HostBinding('class.et-card-full') full = false;

  constructor() {
  }

  ngOnInit() {
  }

}

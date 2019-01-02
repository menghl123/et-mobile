import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'et-radio-item',
  templateUrl: './et-radio-item.component.html',
  styleUrls: ['./et-radio-item.component.scss']
})
export class EtRadioItemComponent implements OnInit {
  @Input()
  name: string;

  constructor() {
  }

  ngOnInit() {
  }

}

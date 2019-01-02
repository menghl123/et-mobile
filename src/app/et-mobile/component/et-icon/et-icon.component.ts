import {Component, Input, OnInit} from '@angular/core';
import {IconInterface} from '../../../../component-interface/icon.interface';

@Component({
  selector: 'et-icon',
  templateUrl: './et-icon.component.html',
  styleUrls: ['./et-icon.component.scss']
})
export class EtIconComponent implements OnInit, IconInterface {
  @Input()
  color: string;
  @Input()
  cssClass: string;
  @Input()
  cssStyle: {};
  @Input()
  type: string;
  @Input()
  name: string;
  @Input()
  size: string;
  constructor() {
  }

  ngOnInit() {
    this.cssStyle = this.cssClass || {};
    this.cssStyle['type'] = this.color;
  }

}

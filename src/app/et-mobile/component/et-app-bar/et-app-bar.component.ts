import {Component, Input, OnInit} from '@angular/core';
import {AppBarInterface} from '../../../../component-interface/app-bar.interface';

@Component({
  selector: 'et-app-bar',
  templateUrl: './et-app-bar.component.html',
  styleUrls: ['./et-app-bar.component.scss']
})
export class EtAppBarComponent implements OnInit, AppBarInterface {
  @Input()
  cssClass: string;
  @Input()
  cssStyle: any;

  @Input()
  backgroundColor: string;
  @Input()
  color: string;
  hasBorder: boolean;
  height: string;

  constructor() {
  }

  ngOnInit() {
  }

}

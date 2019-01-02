import {Component, Input, OnInit} from '@angular/core';
import {DrawerInterface} from '../../../../component-interface/drawer.interface';

@Component({
  selector: 'et-drawer',
  templateUrl: './et-drawer.component.html',
  styleUrls: ['./et-drawer.component.scss']
})
export class EtDrawerComponent implements OnInit, DrawerInterface {
  @Input()
  enableBackdropDismiss = true;
  @Input()
  id: string;
  @Input()
  isShow = false;
  @Input()
  width: string;

  transformStyle = 'translate3d(-100%, 0, 0px)';
  transformDurationStyle = '0ms';

  constructor() {
  }

  ngOnInit() {
    if (this.isShow) {
      this.show();
    }
  }

  onDbClick() {
    if (this.enableBackdropDismiss) {
      this.hide();
    }
  }

  toggle() {
    if (!this.isShow) {
      this.show();
    } else {
      this.hide();
    }
  }

  show() {
    this.transformStyle = 'translate3d(0, 0, 0px)';
    this.transformDurationStyle = '300ms';
    this.isShow = true;
  }

  hide() {
    this.transformStyle = 'translate3d(-100%, 0, 0px)';
    this.transformDurationStyle = '300ms';
    this.isShow = false;
  }


}

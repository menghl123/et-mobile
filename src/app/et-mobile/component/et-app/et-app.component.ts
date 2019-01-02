import {Component, HostBinding, OnDestroy, OnInit} from '@angular/core';
import {SlideLeftRight} from '../../animation/slide.animation';
import {AppInterface} from '../../../../component-interface/app.interface';

@Component({
  selector: 'et-app',
  templateUrl: './et-app.component.html',
  styleUrls: ['./et-app.component.scss'],
  animations: [SlideLeftRight]
})
export class EtAppComponent implements OnInit, OnDestroy, AppInterface {
  @HostBinding('@slideLeftRight') private state = 'normal';

  constructor() {

  }

  ngOnInit() {

  }

  ngOnDestroy(): void {
  }

}

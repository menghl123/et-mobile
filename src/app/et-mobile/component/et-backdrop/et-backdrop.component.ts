import {Component, HostBinding, OnDestroy, OnInit} from '@angular/core';
import {Opacity} from '../../animation/slide.animation';

@Component({
  selector: 'et-backdrop',
  templateUrl: './et-backdrop.component.html',
  styleUrls: ['./et-backdrop.component.scss'],
  animations: [Opacity]
})
export class EtBackdropComponent implements OnInit, OnDestroy {
  @HostBinding('@opacity') private state = 'show';

  constructor() {
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
  }

}

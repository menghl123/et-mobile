import {Component, OnInit} from '@angular/core';
import {PopverOptions} from './popver-options.model';

@Component({
  selector: 'et-popover',
  templateUrl: './et-popover.component.html',
  styleUrls: ['./et-popover.component.scss']
})
export class EtPopoverComponent implements OnInit {

  constructor(public popverOptions: PopverOptions) {
  }

  ngOnInit() {
  }

  onItemClick(item) {
    this.popverOptions.dismiss.emit(item);
  }

}

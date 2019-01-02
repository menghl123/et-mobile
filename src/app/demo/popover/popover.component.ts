import {Component, ElementRef, OnInit} from '@angular/core';
import {EtPopoverController} from '../../et-mobile/controller/et-popover.controller';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss']
})
export class PopoverComponent implements OnInit {

  constructor(private popoverController: EtPopoverController,
              private elementRef: ElementRef) {
  }

  ngOnInit() {
  }

  openPopbasic(event) {
    this.popoverController.builder()
      .item('选项一')
      .item('选项二')
      .item('选你想2211221122', 'mdi-camera-metering-spot')
      .position('leftBottom')
      .target(event.target)
      .showPopover()
      .subscribe((item) => {
        console.log(item);
      });
  }
}

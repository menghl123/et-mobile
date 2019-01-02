import {Directive, ElementRef, EventEmitter, HostListener, Input, Output} from '@angular/core';
import {PopItemInterface} from '../component/et-popover/popver-options.model';
import {EtPopoverController} from '../controller/et-popover.controller';

@Directive({
  selector: '[etPopover]'
})
export class EtPopoverDirective {
  @Input()
  position: string = 'bottom';
  @Input()
  mask: boolean = true;
  @Input()
  data: Array<PopItemInterface> = [];

  @Output()
  optionSelect: EventEmitter<any> = new EventEmitter();

  constructor(private elementRef: ElementRef,
              private popoverController: EtPopoverController) {
  }

  @HostListener('click')
  public onClick() {
    this.popoverController.builder()
      .data(this.data)
      .position(this.position)
      .target(this.elementRef.nativeElement)
      .showPopover()
      .subscribe((item) => {
        this.optionSelect.emit(item);
      });
  }

}

import {Component, HostBinding, Input} from '@angular/core';

@Component({
  selector: 'et-carousel-indicator',
  templateUrl: './et-carousel-indicator.component.html',
  styleUrls: ['./et-carousel-indicator.component.scss']
})
export class EtCarouselIndicatorComponent {

  items: { active: boolean }[] = [];

  private _page = 0;
  private _pageCount = 0;

  @Input()
  set page(p: number) {
    this._page = p;
    this.updateSelected();
  }

  @Input()
  set pageCount(p: number) {
    this._pageCount = p || 0;
    this.updateItems();
  }

  @Input()
  dotStyle: object = {};
  @Input()
  dotActiveStyle: object = {};
  @Input()
  dotColor = 'white';

  @HostBinding('class.et-dot-indicator')
  dotIndicator = true;

  private updateItems() {
    this.items = new Array(this._pageCount);
    for (let i = 0; i < this._pageCount; i++) {
      this.items[i] = {active: i === this._page};
    }
  }

  private updateSelected() {
    if (this.items.length !== this._pageCount) {
      return this.updateItems();
    }
    if (this.items.length === 0) {
      return;
    }
    for (let i = 0; i < this._pageCount; i++) {
      this.items[i].active = false;
    }
    this.items[this._page].active = true;
  }
}

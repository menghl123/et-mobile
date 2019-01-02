import {Component, HostBinding} from '@angular/core';

@Component({
  selector: 'et-carousel-item',
  templateUrl: './et-carousel-item.component.html',
  styleUrls: ['./et-carousel-item.component.scss']
})
export class EtCarouselItemComponent {
  @HostBinding('class.carousel-container')
  container = true;
  @HostBinding('style.width.px')
  width;
  @HostBinding('style.height')
  height = 'auto';
  @HostBinding('style.left.px')
  left;
  @HostBinding('style.top.px')
  top;
  @HostBinding('style.margin')
  margin;
}

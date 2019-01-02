import {Component, ElementRef, OnInit, Renderer2} from '@angular/core';

@Component({
  selector: 'et-ripple-effect',
  templateUrl: './et-ripple-effect.component.html',
  styleUrls: ['./et-ripple-effect.component.scss']
})
export class EtRippleEffectComponent implements OnInit {
  constructor(protected elementRef: ElementRef,
              protected renderer: Renderer2) {
  }

  ngOnInit() {
  }

  onHostClick(event, host) {
    const ripplerContainer = this.elementRef.nativeElement.querySelector('.et-ripple-container');
    if (ripplerContainer) {
      ripplerContainer.remove();
    }

    const newRippleContainer = this.renderer.createElement('div');
    const offsetInfo = host.getBoundingClientRect();
    this.renderer.addClass(newRippleContainer, 'et-ripple-container');
    this.renderer.setStyle(newRippleContainer, 'width', offsetInfo.width + 'px');
    this.renderer.setStyle(newRippleContainer, 'height', offsetInfo.height + 'px');
    this.renderer.appendChild(this.elementRef.nativeElement, newRippleContainer);

    const circleD = offsetInfo.width * 2;
    const newRipple = this.renderer.createElement('div');
    this.renderer.addClass(newRipple, 'et-ripple');
    this.renderer.setStyle(newRipple, 'width', circleD + 'px');
    this.renderer.setStyle(newRipple, 'height', circleD + 'px');
    this.renderer.setStyle(newRipple, 'left', ((event.pageX - offsetInfo.left) - circleD / 2) + 'px');
    this.renderer.setStyle(newRipple, 'top', ((event.pageY - offsetInfo.top) - circleD / 2) + 'px');
    this.renderer.appendChild(newRippleContainer, newRipple);

    newRipple.addEventListener('animationend', function () {
      newRippleContainer.remove();
    }.bind(this), false);
  }
}

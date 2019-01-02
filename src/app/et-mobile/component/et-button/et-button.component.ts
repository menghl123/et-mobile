import {Component, ElementRef, HostListener, Input, OnInit, Renderer2, ViewChild} from '@angular/core';
import {ButtonInterface} from '../../../../component-interface/button.interface';
import {EtRippleEffectComponent} from '../et-ripple-effect/et-ripple-effect.component';

@Component({
  selector: 'et-button',
  templateUrl: './et-button.component.html',
  styleUrls: ['./et-button.component.scss']
})
export class EtButtonComponent implements OnInit, ButtonInterface {
  @ViewChild(EtRippleEffectComponent)
  effect: EtRippleEffectComponent;

  @Input()
  block: boolean;
  @Input()
  clear: boolean;
  @Input()
  type = 'primary';
  @Input()
  outline: boolean;
  @Input()
  round: boolean;
  @Input()
  size: string;

  constructor(private elementRef: ElementRef,
              private renderer2: Renderer2) {
  }

  ngOnInit() {
    this.renderer2.addClass(this.elementRef.nativeElement, `et-button-${this.type || 'primary'}`);

    if (this.outline) {
      this.renderer2.addClass(this.elementRef.nativeElement, `et-button-outline`);
    }

    if (this.clear) {
      this.renderer2.addClass(this.elementRef.nativeElement, `et-button-clear`);
    }

    if (this.block) {
      this.renderer2.addClass(this.elementRef.nativeElement, `et-button-block`);
    }

    if (this.round) {
      this.renderer2.addClass(this.elementRef.nativeElement, `et-button-round`);
    }

    if (this.size) {
      this.renderer2.addClass(this.elementRef.nativeElement, `et-button-${this.size}`);
    }
  }

  @HostListener('click', ['$event'])
  public onHostClick(event) {
    this.effect.onHostClick(event, this.elementRef.nativeElement);
  }


}

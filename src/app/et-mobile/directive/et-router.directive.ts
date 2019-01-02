import {Directive, HostListener, Input} from '@angular/core';
import {PlatformLocation} from '@angular/common';
import {Router} from '@angular/router';

@Directive({
  selector: '[etRouter]'
})
export class EtRouterDirective {
  @Input()
  url: string;

  @HostListener('click')
  public onHostClick() {
    if (this.url) {
      this.router.navigate([this.url]);
    } else {
      this.platformLocation.back();
    }
  }

  constructor(private router: Router,
              private platformLocation: PlatformLocation) {
  }

}

import {Injectable} from '@angular/core';
import {PlatformLocation} from '@angular/common';
import {OverlayRef} from '@angular/cdk/overlay';


@Injectable({
  providedIn: 'root',
})
export class EtNavController {
  overlayRefs: OverlayRef[] = [];

  constructor(private platformLocation: PlatformLocation) {

  }

  registerNav() {
    this.platformLocation.onPopState((state) => {
      if (this.overlayRefs.length > 0) {
        const overlayRef = this.overlayRefs.pop();
        if (overlayRef && overlayRef.dispose) {
          overlayRef.dispose()
          ;
        }
      }
    });
  }

  pushState(components: OverlayRef) {
    this.platformLocation.pushState(null, null, window.location.href);
    this.overlayRefs.push(components);
  }

}

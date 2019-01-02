import {Injectable,} from '@angular/core';
import {PlatformLocation} from '@angular/common';


@Injectable({
  providedIn: 'root',
})
export class EtNavService {
  dynamicComponents = [];

  constructor(private platformLocation: PlatformLocation) {

  }

  registerNav() {
    this.platformLocation.onPopState((state) => {
      if (this.dynamicComponents.length > 0) {
        const component = this.dynamicComponents.pop();
        if (component && component.instance.destroySelf) {
          component.instance.destroySelf();
        }
      }
    });
  }

  pushState(components) {
    this.platformLocation.pushState(null, null, this.platformLocation.pathname);
    this.dynamicComponents.push(components);
  }

}

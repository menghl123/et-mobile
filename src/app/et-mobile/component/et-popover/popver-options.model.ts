import {ElementRef, EventEmitter} from '@angular/core';

export interface PopItemInterface {
  label?: string;
  icon?: string;
}

export interface PopOptionsInterface {
  data?: Array<PopItemInterface>;
  mask?: boolean;
  position?: string; // leftRight top rightTop right rightBottom bottom leftBottom left
  dismiss?: EventEmitter<any>;
  target?: ElementRef;
}

export class PopverOptions implements PopOptionsInterface {
  target?: any;
  position: string = 'bottom';
  data?: Array<PopItemInterface> = [];
  mask?: boolean = true;
  dismiss?: EventEmitter<any> = new EventEmitter();
}

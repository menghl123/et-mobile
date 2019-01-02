import {EventEmitter} from '@angular/core';

export interface ToastOptionsInterface {
  message?: string;
  duration?: number;
  position?: string; // top center bottom
  dismiss?: EventEmitter<any>;
  ok?: any;
  cancel?: any;
}

export class ToastOptions implements ToastOptionsInterface {
  message?: string;
  duration?: number = 3000;
  position?: string = 'bottom';
  dismiss?: EventEmitter<any> = new EventEmitter();
  ok?: any;
  cancel?: any;
}

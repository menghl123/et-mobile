import {EventEmitter} from '@angular/core';

export interface TabbarInterface {
  // input
  type: string; // primary secondary danger light dark
  border: string; // none bottom top double

  // output
  tabsChange: EventEmitter<any>;
}

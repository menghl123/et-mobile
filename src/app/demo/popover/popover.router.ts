import {Routes} from '@angular/router';
import {PopoverComponent} from './popover.component';

export const ROUTER_CONFIG: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'basic'},
  {path: '', component: PopoverComponent},
];


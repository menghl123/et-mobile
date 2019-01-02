import {Routes} from '@angular/router';
import {RadioComponent} from './radio.component';

export const ROUTER_CONFIG: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'basic'},
  {path: '', component: RadioComponent},
];


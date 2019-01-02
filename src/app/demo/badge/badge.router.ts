import {Routes} from '@angular/router';
import {BadgeComponent} from './badge.component';

export const ROUTER_CONFIG: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'basic'},
  {path: '', component: BadgeComponent},
];

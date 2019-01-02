import {Routes} from '@angular/router';
import {FlexComponent} from './flex.component';

export const ROUTER_CONFIG: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'basic'},
  {path: '', component: FlexComponent},
];

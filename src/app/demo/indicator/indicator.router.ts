import {Routes} from '@angular/router';
import {IndicatorComponent} from './indicator.component';

export const ROUTER_CONFIG: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'basic'},
  {path: '', component: IndicatorComponent},
];

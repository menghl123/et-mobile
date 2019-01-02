import {Routes} from '@angular/router';
import {RefresherComponent} from './refresher.component';

export const ROUTER_CONFIG: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'basic'},
  {path: '', component: RefresherComponent},
];

import {Routes} from '@angular/router';
import {SearchBarComponent} from './search-bar.component';

export const ROUTER_CONFIG: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'basic'},
  {path: '', component: SearchBarComponent},
];

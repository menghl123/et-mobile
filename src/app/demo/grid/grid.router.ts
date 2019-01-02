import {Routes} from '@angular/router';
import {GridComponent} from './grid.component';

export const ROUTER_CONFIG: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'basic'},
  {path: '', component: GridComponent},
];

import {Routes} from '@angular/router';
import {InputComponent} from './input.component';

export const ROUTER_CONFIG: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'basic'},
  {path: '', component: InputComponent},
];


import {Routes} from '@angular/router';
import {CheckboxComponent} from './checkbox.component';

export const ROUTER_CONFIG: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'basic'},
  {path: '', component: CheckboxComponent},
];

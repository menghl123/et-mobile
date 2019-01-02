import {Routes} from '@angular/router';
import {ButtonComponent} from './button.component';

export const ROUTER_CONFIG: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'basic'},
  {path: '', component: ButtonComponent},
];

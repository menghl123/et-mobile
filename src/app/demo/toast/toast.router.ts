import {Routes} from '@angular/router';
import {ToastComponent} from './toast.component';

export const ROUTER_CONFIG: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'basic'},
  {path: '', component: ToastComponent},
];


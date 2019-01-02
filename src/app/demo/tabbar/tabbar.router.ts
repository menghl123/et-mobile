import {Routes} from '@angular/router';
import {TabbarComponent} from './tabbar.component';

export const ROUTER_CONFIG: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'basic'},
  {path: '', component: TabbarComponent},
];


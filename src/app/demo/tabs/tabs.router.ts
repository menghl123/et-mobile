import {Routes} from '@angular/router';
import {TabsComponent} from './tabs.component';

export const ROUTER_CONFIG: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'basic'},
  {path: '', component: TabsComponent},
];

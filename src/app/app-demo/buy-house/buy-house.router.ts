import {Routes} from '@angular/router';
import {BuyHouseComponent} from './buy-house.component';
import {ByHouseIndexComponent} from './by-house-index/by-house-index.component';

export const ROUTER_CONFIG: Routes = [
  {path: '', pathMatch: 'full', redirectTo: ''},
  {
    path: '', component: BuyHouseComponent, children: [
      {path: '', pathMatch: 'full', redirectTo: 'index'},
      {path: 'index', component: ByHouseIndexComponent}
    ]
  },
];


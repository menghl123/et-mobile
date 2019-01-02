import {Routes} from '@angular/router';
import {CardComponent} from './card.component';

export const ROUTER_CONFIG: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'basic'},
  {path: '', component: CardComponent},
];


import {Routes} from '@angular/router';
import {CarouselComponent} from './carousel.component';

export const ROUTER_CONFIG: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'basic'},
  {path: '', component: CarouselComponent},
];


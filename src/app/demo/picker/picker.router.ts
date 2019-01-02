import {Routes} from '@angular/router';
import {PickerComponent} from './picker.component';
import {PickerViewComponent} from './picker-view/picker-view.component';

export const ROUTER_CONFIG: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'basic'},
  {path: '', component: PickerComponent},
  {path: 'view', component: PickerViewComponent},
];

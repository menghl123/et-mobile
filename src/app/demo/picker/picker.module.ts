import {NgModule} from '@angular/core';
import {PickerComponent} from './picker.component';
import {ShareModule} from '../../share/share.module';
import {RouterModule} from '@angular/router';
import {ROUTER_CONFIG} from './picker.router';
import { PickerViewComponent } from './picker-view/picker-view.component';

@NgModule({
  declarations: [PickerComponent, PickerViewComponent],
  imports: [
    ShareModule,
    RouterModule.forChild(ROUTER_CONFIG)]
})
export class PickerModule {
}

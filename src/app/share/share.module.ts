import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EtMobileModule} from '../et-mobile/et-mobile.module';
import {DrawerComponent} from './drawer/drawer.component';

@NgModule({
  declarations: [DrawerComponent],
  imports: [
    CommonModule,
    EtMobileModule
  ],
  exports: [
    EtMobileModule,
    CommonModule,
    DrawerComponent
  ]
})
export class ShareModule {
}

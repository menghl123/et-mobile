import {NgModule} from '@angular/core';
import {BuyHouseComponent} from './buy-house.component';
import {ShareModule} from '../../share/share.module';
import {RouterModule} from '@angular/router';
import {ROUTER_CONFIG} from './buy-house.router';
import { ByHouseIndexComponent } from './by-house-index/by-house-index.component';

@NgModule({
  declarations: [BuyHouseComponent, ByHouseIndexComponent],
  imports: [
    ShareModule,
    RouterModule.forChild(ROUTER_CONFIG)
  ]
})
export class BuyHouseModule {
}

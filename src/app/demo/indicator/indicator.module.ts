import {NgModule} from '@angular/core';
import {IndicatorComponent} from './indicator.component';
import {ShareModule} from '../../share/share.module';
import {RouterModule} from '@angular/router';
import {ROUTER_CONFIG} from './indicator.router';

@NgModule({
  declarations: [IndicatorComponent],
  imports: [
    ShareModule,
    RouterModule.forChild(ROUTER_CONFIG)
  ]
})
export class IndicatorModule {
}

import {NgModule} from '@angular/core';
import {FlexComponent} from './flex.component';
import {ShareModule} from '../../share/share.module';
import {RouterModule} from '@angular/router';
import {ROUTER_CONFIG} from './flex.router';

@NgModule({
  declarations: [FlexComponent],
  imports: [
    ShareModule,
    RouterModule.forChild(ROUTER_CONFIG)
  ]
})
export class FlexModule {
}

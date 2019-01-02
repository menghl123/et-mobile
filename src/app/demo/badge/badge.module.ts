import {NgModule} from '@angular/core';
import {BadgeComponent} from './badge.component';
import {ShareModule} from '../../share/share.module';
import {RouterModule} from '@angular/router';
import {ROUTER_CONFIG} from './badge.router';

@NgModule({
  declarations: [BadgeComponent],
  imports: [
    ShareModule,
    RouterModule.forChild(ROUTER_CONFIG)
  ]
})
export class BadgeModule {
}

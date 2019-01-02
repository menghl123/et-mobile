import {NgModule} from '@angular/core';
import {RefresherComponent} from './refresher.component';
import {ShareModule} from '../../share/share.module';
import {RouterModule} from '@angular/router';
import {ROUTER_CONFIG} from './refresher.router';

@NgModule({
  declarations: [RefresherComponent],
  imports: [
    ShareModule,
    RouterModule.forChild(ROUTER_CONFIG)
  ]
})
export class RefresherModule {
}

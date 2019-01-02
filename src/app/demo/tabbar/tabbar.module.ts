import {NgModule} from '@angular/core';
import {TabbarComponent} from './tabbar.component';
import {ShareModule} from '../../share/share.module';
import {RouterModule} from '@angular/router';
import {ROUTER_CONFIG} from './tabbar.router';

@NgModule({
  declarations: [TabbarComponent],
  imports: [
    ShareModule,
    RouterModule.forChild(ROUTER_CONFIG)
  ]
})
export class TabbarModule {
}

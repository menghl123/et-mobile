import {NgModule} from '@angular/core';
import {TabsComponent} from './tabs.component';
import {ShareModule} from '../../share/share.module';
import {RouterModule} from '@angular/router';
import {ROUTER_CONFIG} from './tabs.router';

@NgModule({
  declarations: [TabsComponent],
  imports: [
    ShareModule,
    RouterModule.forChild(ROUTER_CONFIG)
  ]
})
export class TabsModule {
}

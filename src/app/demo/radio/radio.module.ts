import {NgModule} from '@angular/core';
import {RadioComponent} from './radio.component';
import {ShareModule} from '../../share/share.module';
import {RouterModule} from '@angular/router';
import {ROUTER_CONFIG} from './radio.router';

@NgModule({
  declarations: [RadioComponent],
  imports: [
    ShareModule,
    RouterModule.forChild(ROUTER_CONFIG)
  ]
})
export class RadioModule {
}

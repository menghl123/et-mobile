import {NgModule} from '@angular/core';
import {ButtonComponent} from './button.component';
import {ShareModule} from '../../share/share.module';
import {RouterModule} from '@angular/router';
import {ROUTER_CONFIG} from './button.router';

@NgModule({
  declarations: [ButtonComponent],
  imports: [
    ShareModule,
    RouterModule.forChild(ROUTER_CONFIG)
  ]
})
export class ButtonModule {
}

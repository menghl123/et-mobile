import {NgModule} from '@angular/core';
import {CheckboxComponent} from './checkbox.component';
import {ShareModule} from '../../share/share.module';
import {RouterModule} from '@angular/router';
import {ROUTER_CONFIG} from './checkbox.router';

@NgModule({
  declarations: [CheckboxComponent
  ],
  imports: [
    ShareModule,
    RouterModule.forChild(ROUTER_CONFIG)
  ]
})
export class CheckboxModule {
}

import {NgModule} from '@angular/core';
import {PopoverComponent} from './popover.component';
import {ShareModule} from '../../share/share.module';
import {RouterModule} from '@angular/router';
import {ROUTER_CONFIG} from './popover.router';

@NgModule({
  declarations: [PopoverComponent],
  imports: [
    ShareModule,
    RouterModule.forChild(ROUTER_CONFIG)]
})
export class PopoverModule {
}

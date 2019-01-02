import {NgModule} from '@angular/core';
import {ToastComponent} from './toast.component';
import {ShareModule} from '../../share/share.module';
import {RouterModule} from '@angular/router';
import {ROUTER_CONFIG} from './toast.router';

@NgModule({
  declarations: [ToastComponent],
  imports: [
    ShareModule,
    RouterModule.forChild(ROUTER_CONFIG)]
})
export class ToastModule {
}

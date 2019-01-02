import {NgModule} from '@angular/core';
import {IndexComponent} from './index/index.component';
import {ShareModule} from '../share/share.module';

@NgModule({
  declarations: [IndexComponent],
  imports: [
    ShareModule
  ],
  exports: [
    IndexComponent
  ]
})
export class NormalModule {
}

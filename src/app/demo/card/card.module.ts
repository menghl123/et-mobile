import {NgModule} from '@angular/core';
import {CardComponent} from './card.component';
import {ShareModule} from '../../share/share.module';
import {RouterModule} from '@angular/router';
import {ROUTER_CONFIG} from './card.router';

@NgModule({
  declarations: [CardComponent],
  imports: [
    ShareModule,
    RouterModule.forChild(ROUTER_CONFIG)
  ]
})
export class CardModule {
}

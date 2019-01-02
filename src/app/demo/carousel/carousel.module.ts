import {NgModule} from '@angular/core';
import {CarouselComponent} from './carousel.component';
import {ShareModule} from '../../share/share.module';
import {RouterModule} from '@angular/router';
import {ROUTER_CONFIG} from './carousel.router';

@NgModule({
  declarations: [CarouselComponent],
  imports: [
    ShareModule,
    RouterModule.forChild(ROUTER_CONFIG)
  ]
})
export class CarouselModule {
}

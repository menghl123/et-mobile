import {NgModule} from '@angular/core';
import {SearchBarComponent} from './search-bar.component';
import {ShareModule} from '../../share/share.module';
import {RouterModule} from '@angular/router';
import {ROUTER_CONFIG} from './search-bar.router';

@NgModule({
  declarations: [SearchBarComponent],
  imports: [
    ShareModule,
    RouterModule.forChild(ROUTER_CONFIG)
  ]
})
export class SearchBarModule {
}

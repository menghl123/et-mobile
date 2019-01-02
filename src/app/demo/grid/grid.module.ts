import {NgModule} from '@angular/core';
import {GridComponent} from './grid.component';
import {ShareModule} from '../../share/share.module';
import {RouterModule} from '@angular/router';
import {ROUTER_CONFIG} from './grid.router';

@NgModule({
  declarations: [GridComponent],
  imports: [
    ShareModule,
    RouterModule.forChild(ROUTER_CONFIG)
  ]
})
export class GridModule {
}

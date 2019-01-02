import {Routes} from '@angular/router';
import {IndexComponent} from './normal/index/index.component';

export const ROUTER_CONFIG: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/index'},
  {path: 'index', component: IndexComponent},
  {path: 'button', loadChildren: './demo/button/button.module#ButtonModule'},
  {path: 'refresher', loadChildren: './demo/refresher/refresher.module#RefresherModule'},
  {path: 'indicator', loadChildren: './demo/indicator/indicator.module#IndicatorModule'},
  {path: 'tabs', loadChildren: './demo/tabs/tabs.module#TabsModule'},
  {path: 'checkbox', loadChildren: './demo/checkbox/checkbox.module#CheckboxModule'},
  {path: 'radio', loadChildren: './demo/radio/radio.module#RadioModule'},
  {path: 'tabbar', loadChildren: './demo/tabbar/tabbar.module#TabbarModule'},
  {path: 'input', loadChildren: './demo/input/input.module#InputModule'},
  {path: 'card', loadChildren: './demo/card/card.module#CardModule'},
  {path: 'grid', loadChildren: './demo/grid/grid.module#GridModule'},
  {path: 'carousel', loadChildren: './demo/carousel/carousel.module#CarouselModule'},
  {path: 'picker', loadChildren: './demo/picker/picker.module#PickerModule'},
  {path: 'popover', loadChildren: './demo/popover/popover.module#PopoverModule'},
  {path: 'toast', loadChildren: './demo/toast/toast.module#ToastModule'},
  {path: 'flex', loadChildren: './demo/flex/flex.module#FlexModule'},
  {path: 'badge', loadChildren: './demo/badge/badge.module#BadgeModule'},
  {path: 'search-bar', loadChildren: './demo/search-bar/search-bar.module#SearchBarModule'},
  {path: 'buy-house', loadChildren: './app-demo/buy-house/buy-house.module#BuyHouseModule'},
];


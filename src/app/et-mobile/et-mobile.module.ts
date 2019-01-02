import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EtButtonComponent} from './component/et-button/et-button.component';
import {EtRippleEffectComponent} from './component/et-ripple-effect/et-ripple-effect.component';
import {EtAppComponent} from './component/et-app/et-app.component';
import {EtAppBarComponent} from './component/et-app-bar/et-app-bar.component';
import {EtIconComponent} from './component/et-icon/et-icon.component';
import {EtAppBodyComponent} from './component/et-body/et-app-body.component';
import {EtDrawerComponent} from './component/et-drawer/et-drawer.component';
import {EtBackdropComponent} from './component/et-backdrop/et-backdrop.component';
import {EtListViewComponent} from './component/et-list-view/et-list-view.component';
import {EtListViewItemComponent} from './component/et-list-view-item/et-list-view-item.component';
import {EtListViewDividerComponent} from './component/et-list-view-divider/et-list-view-divider.component';
import {EtRouterDirective} from './directive/et-router.directive';
import {EtRefresherComponent} from './component/et-refresher/et-refresher.component';
import {EtRefresherContentComponent} from './component/et-refresher/et-refresher-content/et-refresher-content.component';
import {EtIndicatorComponent} from './component/et-indicator/et-indicator.component';
import {EtTabComponent} from './component/et-tabs/et-tab/et-tab.component';
import {EtTabsComponent} from './component/et-tabs/et-tabs.component';
import {EtCheckboxItemComponent} from './component/et-checkbox/et-checkbox-item.component';
import {EtTabbarComponent} from './component/et-tabbar/et-tabbar.component';
import {EtTabbarItemComponent} from './component/et-tabbar/et-tabbar-item/et-tabbar-item.component';
import {EtRadioItemComponent} from './component/et-radio-item/et-radio-item.component';
import {EtInputItemComponent} from './component/et-input-item/et-input-item.component';
import {EtCardComponent} from './component/et-card/et-card.component';
import {EtCardHeaderComponent} from './component/et-card/et-card-header/et-card-header.component';
import {EtCardBodyComponent} from './component/et-card/et-card-body/et-card-body.component';
import {EtCardFooterComponent} from './component/et-card/et-card-footer/et-card-footer.component';
import {EtGridViewComponent} from './component/et-grid-view/et-grid-view.component';
import {EtFlexComponent} from './component/et-flex/et-flex.component';
import {EtCarouselComponent} from './component/et-carousel/et-carousel.component';
import {EtCarouselItemComponent} from './component/et-carousel/et-carousel-item/et-carousel-item.component';
import {EtCarouselIndicatorComponent} from './component/et-carousel/et-carousel-indicator/et-carousel-indicator.component';
import {EtPickerViewComponent} from './component/et-picker-view/et-picker-view.component';
import {EtPickerComponent} from './component/et-picker/et-picker.component';
import {OverlayModule} from '@angular/cdk/overlay';
import {EtNavController} from './controller/et-nav.controller';
import {EtPopoverComponent} from './component/et-popover/et-popover.component';
import {EtFlexItemComponent} from './component/et-flex/et-flex-item/et-flex-item.component';
import {EtTabsDefaultTabbarComponent} from './component/et-tabs/et-tabs-default-tabbar/et-tabs-default-tabbar.component';
import {EtToastComponent} from './component/et-toast/et-toast.component';
import {EtAlertComponent} from './component/et-alert/et-alert.component';
import {EtTouchFeedbackComponent} from './directive/et-touch-feedback.component';
import {EtTouchFeedbackDirective} from './directive/et-touch-feedback.directive';
import {EtBadgeComponent} from './component/et-badge/et-badge.component';
import {EtDatePickerDirective} from './directive/et-date-picker.directive';
import {EtSearchBarComponent} from './component/et-search-bar/et-search-bar.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {EtPopoverDirective} from './directive/et-popover.directive';
import {EtFooterComponent} from './component/et-footer/et-footer.component';

@NgModule({
  declarations: [
    EtButtonComponent,
    EtRippleEffectComponent,
    EtAppComponent,
    EtAppBarComponent,
    EtIconComponent,
    EtAppBodyComponent,
    EtDrawerComponent,
    EtBackdropComponent,
    EtListViewComponent,
    EtListViewItemComponent,
    EtListViewDividerComponent,
    EtRouterDirective,
    EtRefresherComponent,
    EtRefresherContentComponent,
    EtIndicatorComponent,
    EtTabComponent,
    EtTabsComponent,
    EtCheckboxItemComponent,
    EtTabbarComponent,
    EtTabbarItemComponent,
    EtRadioItemComponent,
    EtInputItemComponent,
    EtCardComponent,
    EtCardHeaderComponent,
    EtCardBodyComponent,
    EtCardFooterComponent,
    EtGridViewComponent,
    EtFlexComponent,
    EtFlexItemComponent,
    EtCarouselComponent,
    EtCarouselItemComponent,
    EtCarouselIndicatorComponent,
    EtPickerViewComponent,
    EtPickerComponent,
    EtPopoverComponent,
    EtTabsDefaultTabbarComponent,
    EtToastComponent,
    EtAlertComponent,
    EtTouchFeedbackComponent,
    EtTouchFeedbackDirective,
    EtBadgeComponent,
    EtDatePickerDirective,
    EtSearchBarComponent,
    EtPopoverDirective,
    EtFooterComponent,
  ],
  imports: [
    CommonModule,
    OverlayModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    EtButtonComponent,
    EtRippleEffectComponent,
    EtAppComponent,
    EtAppBarComponent,
    EtIconComponent,
    EtAppBodyComponent,
    EtDrawerComponent,
    EtBackdropComponent,
    EtListViewComponent,
    EtListViewItemComponent,
    EtListViewDividerComponent,
    EtRouterDirective,
    EtRefresherComponent,
    EtRefresherContentComponent,
    EtIndicatorComponent,
    EtTabComponent,
    EtTabsComponent,
    EtCheckboxItemComponent,
    EtTabbarComponent,
    EtTabbarItemComponent,
    EtRadioItemComponent,
    EtInputItemComponent,
    EtCardHeaderComponent,
    EtCardBodyComponent,
    EtCardFooterComponent,
    EtCardComponent,
    EtGridViewComponent,
    EtCarouselComponent,
    EtCarouselItemComponent,
    EtCarouselIndicatorComponent,
    EtPickerComponent,
    EtPickerViewComponent,
    EtFlexComponent,
    EtFlexItemComponent,
    EtPopoverComponent,
    EtToastComponent,
    EtTouchFeedbackComponent,
    EtTouchFeedbackDirective,
    EtBadgeComponent,
    EtSearchBarComponent,
    EtPopoverDirective,
    EtFooterComponent
  ],
  entryComponents: [
    EtPickerComponent,
    EtPopoverComponent,
    EtToastComponent,

  ]
})
export class EtMobileModule {

  constructor(private navController: EtNavController) {
    this.navController.registerNav();
  }
}

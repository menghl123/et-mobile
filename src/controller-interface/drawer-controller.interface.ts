import {EtDrawerComponent} from '../app/et-mobile/component/et-drawer/et-drawer.component';

export interface DrawerControllerInterface {
  drawers: EtDrawerComponent[]; // 所有的抽屉都会保存在这里
  register(); //

}

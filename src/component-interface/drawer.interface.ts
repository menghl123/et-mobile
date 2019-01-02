export interface DrawerInterface {
  isShow: boolean; // 显示状态
  id: string; // 每一个drawer都有自己的id
  enableBackdropDismiss: boolean; // 点击背景，隐藏drawer
  width: string; // 抽屉的宽度，默认是60%；

  show(): void; // 显示
  hide(): void; // 隐藏
  toggle(): void; // 更改
}

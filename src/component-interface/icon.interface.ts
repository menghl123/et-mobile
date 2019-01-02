export interface IconInterface {
  name: string; // icon名称
  color: string; // 颜色，优先级高于type
  type: string; // primary secondary danger light dark
  cssStyle: {}; // i标签上的style
  cssClass: string; // i标签上的class
}

import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {EtDrawerComponent} from '../../et-mobile/component/et-drawer/et-drawer.component';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss']
})
export class DrawerComponent implements OnInit {
  components = [
    {label: 'flex布局', url: '/flex', note: 'flex'},
    {label: '按钮', url: '/button', note: 'button'},
    {label: '下拉刷新', url: '/refresher', note: 'refresher'},
    {label: '指示器', url: '/indicator', note: 'indicator'},
    {label: '标签', url: '/tabs', note: 'tabs'},
    {label: '标签栏', url: '/tabbar', note: 'tabbar'},
    {label: '多选框', url: '/checkbox', note: 'checkbox'},
    {label: '单选框', url: '/radio', note: 'radio'},
    {label: '输入框', url: '/input', note: 'input'},
    {label: '卡片', url: '/card', note: 'card'},
    {label: '宫格', url: '/grid', note: 'grid'},
    {label: '走马灯', url: '/carousel', note: 'carousel'},
    {label: '选择器', url: '/picker', note: 'picker'},
    {label: '选择器视图', url: '/picker/view', note: 'picker-view'},
    {label: '冒泡', url: '/popover', note: 'popover'},
    {label: '小提示', url: '/toast', note: 'toast'},
    {label: '徽章', url: '/badge', note: 'badge'},
    {label: '搜索栏', url: '/search-bar', note: 'search-bar'},
  ];

  constructor(private router: Router,
              private drawerComponent: EtDrawerComponent) {
  }

  ngOnInit() {
  }

  onItemClick(com) {
    this.router.navigate([com.url]);
    this.drawerComponent.hide();
  }
}

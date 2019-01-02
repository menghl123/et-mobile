import {Component, Host, OnInit, Optional} from '@angular/core';
import {EtRefresherComponent} from '../et-refresher.component';

@Component({
  selector: 'et-refresher-content',
  templateUrl: './et-refresher-content.component.html',
  styleUrls: ['./et-refresher-content.component.scss']
})
export class EtRefresherContentComponent implements OnInit {

  constructor(@Host() @Optional() public refresherComponent: EtRefresherComponent) {
  }

  ngOnInit() {
  }

  refreshText() {
    if (this.refresherComponent) {
      if (this.refresherComponent.state === 'pulling') {
        return '下拉刷新';
      }
      if (this.refresherComponent.state === 'ready') {
        return '释放立即刷新';
      }
      if (this.refresherComponent.state === 'fresh') {
        return '正在刷新...';
      }
      if (this.refresherComponent.state === 'complete') {
        return '刷新成功';
      }
    }
  }
}

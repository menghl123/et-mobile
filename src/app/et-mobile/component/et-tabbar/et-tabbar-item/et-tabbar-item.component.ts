import {Component, Host, HostListener, Input, OnInit} from '@angular/core';
import {EtTabbarComponent} from '../et-tabbar.component';

@Component({
  selector: 'et-tabbar-item',
  templateUrl: './et-tabbar-item.component.html',
  styleUrls: ['./et-tabbar-item.component.scss']
})
export class EtTabbarItemComponent implements OnInit {
  @Input()
  icon: string;
  @Input()
  index: number;

  constructor(@Host() private host: EtTabbarComponent) {
  }

  ngOnInit() {
  }

  @HostListener('click')
  public onHostClick() {
    this.host.changeActive(this.index);
  }

  get selectedTab() {
    return this.index === this.host.activeIndex;
  }

}


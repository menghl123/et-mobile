import {AfterContentInit, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TabbarInterface} from '../../../../component-interface/tabbarInterface';

@Component({
  selector: 'et-tabbar',
  templateUrl: './et-tabbar.component.html',
  styleUrls: ['./et-tabbar.component.scss']
})
export class EtTabbarComponent implements OnInit, TabbarInterface, AfterContentInit {
  @Input()
  border = 'double';
  @Input()
  type = 'primary';

  activeIndex = 1;

  @Output()
  tabsChange: EventEmitter<number> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterContentInit(): void {
  }

  changeActive(index: number) {
    this.activeIndex = index;
  }


}

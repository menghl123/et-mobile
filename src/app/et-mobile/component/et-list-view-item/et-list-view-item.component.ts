import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'et-list-view-item',
  templateUrl: './et-list-view-item.component.html',
  styleUrls: ['./et-list-view-item.component.scss']
})
export class EtListViewItemComponent implements OnInit {
  @Input()
  cssClass: any;
  @Input()
  cssStyle: any;

  constructor() {
  }

  ngOnInit() {
  }

}

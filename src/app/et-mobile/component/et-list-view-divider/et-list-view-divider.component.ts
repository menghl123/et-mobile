import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'et-list-view-divider',
  templateUrl: './et-list-view-divider.component.html',
  styleUrls: ['./et-list-view-divider.component.scss']
})
export class EtListViewDividerComponent implements OnInit {
  @Input()
  cssClass: string;
  @Input()
  cssStyle: any;
  @Input()
  color: string;

  constructor() {
  }

  ngOnInit() {
  }

}

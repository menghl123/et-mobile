import {Component, Input, OnInit} from '@angular/core';
import {IndicatorInterface} from '../../../../component-interface/indicator.interface';

@Component({
  selector: 'et-indicator',
  templateUrl: './et-indicator.component.html',
  styleUrls: ['./et-indicator.component.scss']
})
export class EtIndicatorComponent implements OnInit, IndicatorInterface {
  @Input()
  type = 'primary';
  @Input()
  category = 'shape';

  constructor() {
  }

  ngOnInit() {
  }

}

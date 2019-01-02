import {Component, HostBinding} from '@angular/core';

@Component({
  selector: 'et-flex-item',
  templateUrl: './et-flex-item.component.html',
  styleUrls: ['./et-flex-item.component.scss']
})
export class EtFlexItemComponent {

  defaultProps = {
    prefixCls: 'et-flexbox',
    align: 'center'
  };

  @HostBinding('class.et-flexbox-item')
  flexboxItem: boolean = true;

}

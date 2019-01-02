import {Component, HostBinding, Input} from '@angular/core';
import {FlexInterface} from '../../../../component-interface/flex.interface';

@Component({
  selector: 'et-flex',
  templateUrl: './et-flex.component.html',
  styleUrls: ['./et-flex.component.scss']
})
export class EtFlexComponent implements FlexInterface {
  defaultProps = {
    prefixCls: 'et-flexbox',
    align: 'center'
  };

  private _direction: string = '';
  private _wrap: string;
  private _justify: string = '';
  private _alignContent: string = '';

  @Input()
  set wrap(value) {
    this._wrap = value;
  }

  @Input()
  set align(value) {
    this.defaultProps.align = value;
  }

  @Input()
  set alignContent(value) {
    this._alignContent = value;
  }

  @Input()
  set direction(value) {
    this._direction = value;
  }

  @Input()
  set justify(value) {
    this._justify = value;
  }

  @HostBinding('class.et-flexbox')
   flexbox: boolean = true;

  @HostBinding('class.et-flexbox-dir-row')
  get  flexboxDirRow() {
    return this._direction === 'row';
  }

  @HostBinding('class.et-flexbox-dir-row-reverse')
  get  flexboxDirRowReverse() {
    return this._direction === 'row-reverse';
  }

  @HostBinding('class.et-flexbox-dir-column')
  get  flexboxDirColumn() {
    return this._direction === 'column';
  }

  @HostBinding('class.et-flexbox-dir-column-reverse')
  get  flexboxDirColumnReverse() {
    return this._direction === 'column-reverse';
  }

  @HostBinding('class.et-flexbox-nowrap')
  get  flexboxNowrap() {
    return this._wrap === 'nowrap';
  }

  @HostBinding('class.et-flexbox-wrap')
  get  flexboxWrap() {
    return this._wrap === 'wrap';
  }

  @HostBinding('class.et-flexbox-wrap-reverse')
  get  flexboxWrapReverse() {
    return this._wrap === 'wrap-reverse';
  }

  @HostBinding('class.et-flexbox-justify-start')
  get  flexboxJustifyStart() {
    return this._justify === 'start';
  }

  @HostBinding('class.et-flexbox-justify-center')
  get  flexboxJustifyCenter() {
    return this._justify === 'center';
  }

  @HostBinding('class.et-flexbox-justify-end')
  get  flexboxJustifyEnd() {
    return this._justify === 'end';
  }

  @HostBinding('class.et-flexbox-justify-between')
  get  flexboxJustifyBetween() {
    return this._justify === 'between';
  }

  @HostBinding('class.et-flexbox-justify-around')
  get  flexboxAlignAround() {
    return this._justify === 'around';
  }

  @HostBinding('class.et-flexbox-align-start')
  get  flexboxAlignStart() {
    return this.defaultProps.align === 'start';
  }

  @HostBinding('class.et-flexbox-align-center')
  get  flexboxAlignCenter() {
    return this.defaultProps.align === 'center';
  }

  @HostBinding('class.et-flexbox-align-end')
  get  flexboxAlignEnd() {
    return this.defaultProps.align === 'end';
  }

  @HostBinding('class.et-flexbox-align-baseline')
  get  flexboxAlignBaseline() {
    return this.defaultProps.align === 'baseline';
  }

  @HostBinding('class.et-flexbox-align-stretch')
  get  flexboxAlignStretch() {
    return this.defaultProps.align === 'stretch';
  }

  @HostBinding('class.et-flexbox-align-content-start')
  get  flexboxAlignContentStart() {
    return this._alignContent === 'start';
  }

  @HostBinding('class.et-flexbox-align-content-center')
  get  flexboxAlignCotentCenter() {
    return this._alignContent === 'center';
  }

  @HostBinding('class.et-flexbox-align-content-end')
  get  flexboxAlignContentEnd() {
    return this._alignContent === 'end';
  }

  @HostBinding('class.et-flexbox-align-content-between')
  get  flexboxAlignContentBetween() {
    return this._alignContent === 'between';
  }

  @HostBinding('class.et-flexbox-align-content-around')
  get  flexboxAlignContentAround() {
    return this._alignContent === 'around';
  }

  @HostBinding('class.et-flexbox-align-content-stretch')
  get  flexboxAlignContentStretch() {
    return this._alignContent === 'stretch';
  }

  constructor() {
  }

}

import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {ControlValueAccessor} from '@angular/forms';
import {EtPickerComponent} from '../et-picker/et-picker.component';

@Component({
  selector: 'et-picker-view',
  templateUrl: './et-picker-view.component.html',
  styleUrls: ['./et-picker-view.component.scss']
})
export class EtPickerViewComponent extends EtPickerComponent implements OnInit, AfterViewInit, ControlValueAccessor {
  options;
  @Input()
  data: Array<any> = [];
  @Input()
  cols: number = 3;
  @Input()
  cascade: boolean;
  @Input()
  indicatorStyle: object = {};
  @Input()
  itemStyle: object = {};

  pickerViewInit() {
    this.options.data = this.data;
    this.options.cols = this.cols;
    this.options.cascade = this.cascade;
    this.init();
  }

  writeValue(value: any[]): void {
    if (value) {
      this.options.value = value;
      this.init();
    }
  }

  registerOnChange(fn: (_: any[]) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any[]): void {
  }

  ngOnInit() {
    this.pickerViewInit();
  }

  ngAfterViewInit() {
    this.currentPicker = this.elementRef.nativeElement;
    this.reloadPicker();
  }
}

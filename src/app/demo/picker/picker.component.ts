import {Component, OnInit} from '@angular/core';
import {EtPickerController} from '../../et-mobile/controller/et-picker.controller';
import {getData} from './demo-data/address-data';

@Component({
  selector: 'app-picker',
  templateUrl: './picker.component.html',
  styleUrls: ['./picker.component.scss']
})
export class PickerComponent implements OnInit {

  constructor(private pickerController: EtPickerController) {
  }

  ngOnInit() {
  }

  openSinglePicker() {
    this.pickerController.builder()
      .title('单选')
      .cols(1)
      .data(getData())
      .showPicker().subscribe(res => {
      console.log(res);
    }, error => {
      console.log(error);
    });
  }
  openMuilPicker() {
    this.pickerController.builder()
      .title('多选')
      .cols(3)
      .data(getData())
      .showPicker().subscribe(res => {
      console.log(res);
    }, error => {
      console.log(error);
    });
  }
  openMuilNoCascaderPicker() {
    this.pickerController.builder()
      .title('多选')
      .cols(3)
      .data(getData())
      .cascade(false)
      .showPicker().subscribe(res => {
      console.log(res);
    }, error => {
      console.log(error);
    });
  }

  openValue() {
    this.pickerController.builder()
      .title('单选')
      .cols(1)
      .value(['天津市'])
      .data(getData())
      .showPicker().subscribe(res => {
      console.log(res);
    }, error => {
      console.log(error);
    });
  }


}

import {Component, OnInit} from '@angular/core';
import {EtToastController} from '../../et-mobile/controller/et-toast.controller';
import {Opacity} from '../../et-mobile/animation/slide.animation';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
  animations:[Opacity]
})
export class ToastComponent implements OnInit {

  constructor(private toastController: EtToastController) {
  }

  ngOnInit() {
  }

  doToast() {
    this.toastController.builder()
      .duration(3000)
      .message('我是一个段提示')
      .present();
  }

}

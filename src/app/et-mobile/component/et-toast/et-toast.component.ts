import {Component, HostBinding, OnInit} from '@angular/core';
import {ToastOptions} from './toast-options.model';
import {Subscription, timer} from 'rxjs';
import {Opacity} from '../../animation/slide.animation';

@Component({
  selector: 'et-toast',
  templateUrl: './et-toast.component.html',
  styleUrls: ['./et-toast.component.scss'],
  animations: [Opacity]
})
export class EtToastComponent implements OnInit {
  @HostBinding('@opacity') private state = 'display';

  timer: Subscription;

  constructor(public toastOptions: ToastOptions) {
    this.timer = timer(this.toastOptions.duration).subscribe(() => {
      this.toastOptions.ok();
      this.timer.unsubscribe();
    });
  }

  ngOnInit() {
  }

}

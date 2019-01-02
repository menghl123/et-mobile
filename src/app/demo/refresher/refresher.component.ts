import {Component, OnInit} from '@angular/core';
import {timer} from 'rxjs';

@Component({
  selector: 'app-refresher',
  templateUrl: './refresher.component.html',
  styleUrls: ['./refresher.component.scss']
})
export class RefresherComponent implements OnInit {

  freshTime = 0;
  array = [];

  constructor() {
    for (let i = 0; i < 20; i++) {
      this.array.push({index: i, label: `我是第${i}行`});
    }
  }

  ngOnInit() {
  }

  onRefresh(refresher) {
    const lastIndex = this.array[this.array.length - 1].index;
    timer(1000).subscribe(() => {
      this.freshTime++;
      refresher.complete();
    });
  }

}

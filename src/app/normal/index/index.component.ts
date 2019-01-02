import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  popoverData = [
    {label: '成都摇号助手'},
    {label: '支付宝实例'},
    {label: '微信小程序实例'},
  ];

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  onOptionSelect() {
    this.router.navigate(['buy-house']);
  }
}

import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-by-house-index',
  templateUrl: './by-house-index.component.html',
  styleUrls: ['./by-house-index.component.scss']
})
export class ByHouseIndexComponent implements OnInit {
  data = Array.from(new Array(10)).map((_val, i) => ({
    icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
    text: `name${i}`
  }));
  popoverData = [
    {label: '成都摇号助手'},
    {label: '支付宝实例'},
    {label: '微信小程序实例'},
  ];
  state = {
    data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
    imgHeight: '144px'
  };
  infos = [
    '第1次买房需要注意什么？点击查看',
    '第2次买房需要注意什么？点击查看',
    '第3次买房需要注意什么？点击查看',
    '第4次买房需要注意什么？点击查看',
  ];

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  onOptionSelect() {
    this.router.navigate(['buy-house']);
  }

  click($event) {
    console.log($event);
  }

  cancel() {
    this.router.navigate(['/index']);
  }
}

import {EventEmitter} from '@angular/core';

export interface RefresherInterface {
  // input
  maxPull: number; // 最大的拉动距离,默认值是200px
  minPull: number; // 拉动多少距离便会触动刷新,默认值是40px
  transition: number; // 滑动动画的时间,默认值是300ms
  pullSpeed: number; // 滑动速度,默认值是 0.5(手指滑动距离 * 滑动速度)
  enable: boolean; // 是否可用
  completeDelay: number; // complete结束后，会有一个延迟，默认400ms
  state: string; // 当前组件的状态 'hidden' | 'pulling' | 'ready' | 'fresh' | 'complete'

  // output
  refreshEvent: EventEmitter<any>; // 事件：刷新

  // method
  disable(enable: boolean): void; // 方法:使组件处于不可用状态

}

export interface RefresherContentInterface {
  refreshText(): string;

  refreshIcon(): string;
}

import {animate, state, style, transition, trigger} from '@angular/animations';

export const SlideBottomTop = trigger('slideBottomTop', [
  state('normal', style({'transform': 'translate3d(0px, 0px, 0px)'})),
  state('bottom', style({'transform': 'translate3d(0px, 100%, 0px)'})),
  state('void', style({'transform': 'translate3d(0px, 100%, 0px)'})),
  transition('void  => normal', animate('.3s')), // 第一个参数:动画时间, 第二个参数:动画延迟时间
  transition('bottom  => normal', animate('.3s')), // 第一个参数:动画时间, 第二个参数:动画延迟时间
  transition('normal  => void', animate('.3s')), // 第一个参数:动画时间, 第二个参数:动画延迟时间
  transition('normal  => bottom', animate('.3s')), // 第一个参数:动画时间, 第二个参数:动画延迟时间
]);

export const SlideLeftRight = trigger('slideLeftRight', [
  state('right', style({'transform': 'translate3d(100%, 0px, 0px)', 'opacity': 0})),
  state('normal', style({'transform': 'translate3d(0px, 0px, 0px)', 'opacity': 1})),
  state('left', style({'transform': 'translate3d(-100%, 0px, 0px)', 'opacity': 0})),
  state('void', style({'transform': 'translate3d(-100%, 0px, 0px)', 'opacity': 0})),
  transition('void  => normal', animate('.2s')), // 第一个参数:动画时间, 第二个参数:动画延迟时间
  transition('void  => right', animate('.2s')), // 第一个参数:动画时间, 第二个参数:动画延迟时间
  transition('left  => normal', animate('.2s')), // 第一个参数:动画时间, 第二个参数:动画延迟时间
  transition('normal  => right', animate('2s')), // 第一个参数:动画时间, 第二个参数:动画延迟时间
  transition('normal  => void', animate('.2s')), // 第一个参数:动画时间, 第二个参数:动画延迟时间
  transition('normal  => left', animate('.2s')), // 第一个参数:动画时间, 第二个参数:动画延迟时间
  transition('right  => normal', animate('.2s')), // 第一个参数:动画时间, 第二个参数:动画延迟时间
]);
export const SlideLeftRightStates = {
  normal: 'normal',
  void: 'void',
  left: 'left',
  right: 'right',
};

export const Opacity = trigger('opacity', [
  state('hidden', style({'opacity': 0})),
  state('show', style({'opacity': 0.4})),
  state('display', style({'opacity': 1})),
  state('void', style({'opacity': 0})),
  transition('hidden  => show', animate('.2s')), // 第一个参数:动画时间, 第二个参数:动画延迟时间
  transition('hidden  => display', animate('.2s')), // 第一个参数:动画时间, 第二个参数:动画延迟时间
  transition('void  => show', animate('.2s')), // 第一个参数:动画时间, 第二个参数:动画延迟时间
  transition('void  => display', animate('.2s')), // 第一个参数:动画时间, 第二个参数:动画延迟时间
  transition('show  => void', animate('.2s')), // 第一个参数:动画时间, 第二个参数:动画延迟时间
  transition('display  => void', animate('.2s')), // 第一个参数:动画时间, 第二个参数:动画延迟时间
  transition('show  => hidden', animate('.2s')), // 第一个参数:动画时间, 第二个参数:动画延迟时间
  transition('display  => hidden', animate('.2s')), // 第一个参数:动画时间, 第二个参数:动画延迟时间
]);

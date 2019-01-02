import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Host,
  Input,
  OnDestroy,
  OnInit,
  Optional,
  Output,
  Renderer2
} from '@angular/core';
import {fromEvent, Subscription, timer} from 'rxjs';
import {RefresherInterface} from '../../../../component-interface/refresher.interface';
import {EtAppBodyComponent} from '../et-body/et-app-body.component';
import {map} from 'rxjs/operators';

@Component({
  selector: 'et-refresher',
  templateUrl: './et-refresher.component.html',
  styleUrls: ['./et-refresher.component.scss']
})
export class EtRefresherComponent implements OnInit, AfterViewInit, OnDestroy, RefresherInterface {

  private _touchStartSubscribe: Subscription;
  private _touchMoveSubscribe: Subscription;
  private _touchEndSubscribe: Subscription;
  private _prevY: number;
  private _translatedY = 0;

  state: 'hidden' | 'pulling' | 'ready' | 'fresh' | 'complete' = 'hidden';

  @Input()
  maxPull = 200;
  @Input()
  minPull = 40;
  @Input()
  transition = 300;
  @Input()
  pullSpeed = 0.5;
  @Input()
  enable = true;
  @Input()
  completeDelay = 400;

  @Output()
  refreshEvent: EventEmitter<EtRefresherComponent> = new EventEmitter();


  constructor(protected elementRef: ElementRef,
              protected renderer: Renderer2,
              @Host() @Optional() private appBodyComponent: EtAppBodyComponent) {
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    // 初始化top
    this.renderer.setStyle(this.elementRef.nativeElement, 'top', `${this.appBodyComponent._top}px`);

    this._touchStartSubscribe = fromEvent(this.appBodyComponent.scrollElement, 'touchstart')
      .pipe(map($event => ($event as any).targetTouches[0]))
      .subscribe((touch) => {
        if (this.enable && this.canStartMove()) {
          this._prevY = touch.pageY;
          this.renderTransition(0);
        }
      });

    this._touchMoveSubscribe = fromEvent(this.appBodyComponent.scrollElement, 'touchmove')
      .pipe(
        map($event => ($event as any).targetTouches[0]),
      )
      .subscribe((touch) => {
        if (this.enable && this.canStartMove() && this._prevY) {
          this._translatedY += (touch.pageY - this._prevY) * this.pullSpeed;

          if (this._translatedY > 0 && this._translatedY < this.minPull) {
            this.changeState('pulling');
          }

          if (this._translatedY > this.minPull) {
            this.changeState('ready');
          }

          this.renderTransition(0);
          this.renderTranslated(this._translatedY);
          this._prevY = touch.pageY;
        }
      });

    this._touchEndSubscribe = fromEvent(this.appBodyComponent.scrollElement, 'touchend')
      .subscribe((() => {
        if (this.enable && this.canStartMove() && this._prevY) {
          if (this._translatedY < this.minPull) {
            this._translatedY = 0;
            this.renderTranslated(this._translatedY);
            this.renderTransition(this.transition);
            this.changeState('hidden');
          }

          if (this._translatedY > this.minPull) {
            this._translatedY = this.minPull;
            this.renderTranslated(this._translatedY);
            this.renderTransition(this.transition);
            this.changeState('fresh');
            this.refreshEvent.emit(this);
          }
        }
        this._prevY = null;
      }));
  }

  ngOnDestroy(): void {
    if (this._touchStartSubscribe) {
      this._touchStartSubscribe.unsubscribe();
    }
    if (this._touchMoveSubscribe) {
      this._touchMoveSubscribe.unsubscribe();
    }
    if (this._touchEndSubscribe) {
      this._touchEndSubscribe.unsubscribe();
    }
  }

  // 禁止使用
  public disable(enable: boolean) {
    this.enable = enable;
  }

  // 只有scroll在顶部的时候，才能监听滑动
  canStartMove() {
    return this.appBodyComponent.scrollElement.scrollTop === 0;
  }

  renderTranslated(translatedY: number) {
    if (translatedY > this.maxPull) {
      translatedY = this.maxPull;
    }
    if (translatedY < 0) {
      translatedY = 0;
    }

    this.renderer.setStyle(this.appBodyComponent.scrollElement, 'transform', `translate3d(0px, ${translatedY}px, 0px)`);
  }

  renderTransition(transition: number) {
    this.renderer.setStyle(this.appBodyComponent.scrollElement, 'transition', `${transition}ms`);
  }

  // 关闭刷新
  public complete() {
    this.changeState('complete');
    const timerSubscripe = timer(this.completeDelay).subscribe(() => {
      this.renderTransition(this.transition);
      this.renderTranslated(0);
      this._translatedY = 0;
      this.changeState('hidden');
      timerSubscripe.unsubscribe();
    });
  }


  // 修改状态
  private changeState(state: any) {
    this.state = state;
  }

}

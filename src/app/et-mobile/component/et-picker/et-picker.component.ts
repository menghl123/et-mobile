import {AfterViewInit, Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import * as data from './demo-data/address-data';
import * as velocity from '../../utils/velocity';
import * as touchEvent from '../../utils/touch-event';
import {Subject} from 'rxjs';
import {PickerOptions} from './picker-options.model';
import {SlideBottomTop} from '../../animation/slide.animation';

@Component({
  selector: 'et-picker',
  templateUrl: './et-picker.component.html',
  styleUrls: ['./et-picker.component.scss'],
  animations: [SlideBottomTop]
})
export class EtPickerComponent implements OnInit, AfterViewInit, OnDestroy {
  animationState = 'normal';

  address: any[] = data.getData();
  startY: number = 0;
  differY: number = 0;
  currentY: number = 0;
  len: number = 0;
  dom: any = null;
  index: number = 0;
  maxY: number = 0;
  lineHeight: number = 34;
  data: any[] = [];
  selectedTarget: any[] = [];
  isMouseDown: boolean = false;
  Velocity = velocity.getVelocity();
  currentPicker: any;

  private _unsubscribe$: Subject<void> = new Subject<void>();

  @ViewChild('picker', {read: ViewContainerRef})
  private _picker: ViewContainerRef;

  @HostListener('mousedown', ['$event'])
  @HostListener('touchstart', ['$event'])
  panstart(event) {
    if (!event.target.classList.contains('et-picker-col-mask')) {
      return;
    }
    this.isMouseDown = true;
    event.preventDefault();
    this.dom = touchEvent.getEventTarget(event).target.parentElement.children[2];
    this.len = this.dom.children.length;
    this.maxY = -(this.len - 1);

    if (this.dom.style.transform === 'translateY(0px)') {
      this.currentY = 0;
      this.maxY = -(this.len - 1);
    } else if (this.selectedTarget.length > 0) {
      this.selectedTarget.forEach(item => {
        if (item.targetId === event.target.id) {
          this.currentY = item.currentY;
        }
      });
    }
    this.startY = touchEvent.getEventTarget(event).clientY;
  }

  @HostListener('mousemove', ['$event'])
  @HostListener('touchmove', ['$event'])
  panmove(event) {
    if (!event.target.classList.contains('et-picker-col-mask') || !this.isMouseDown) {
      return;
    }
    event.preventDefault();
    const ev = touchEvent.getEventTarget(event);
    this.differY = ev.clientY - this.startY;
    this.Velocity.record(this.differY);
    this.dom.style.transition = 'transform 0s';
    this.dom.style.transform = `translateY(${this.currentY * this.lineHeight + this.differY}px)`;
  }

  @HostListener('mouseup', ['$event'])
  @HostListener('mouseleave', ['$event'])
  @HostListener('touchend', ['$event'])
  panend(event) {
    if (!event.target.classList.contains('et-picker-col-mask') || !this.isMouseDown) {
      return;
    }
    this.isMouseDown = false;
    event.preventDefault();
    const ev = touchEvent.getEventTarget(event);
    this.differY = ev.clientY - this.startY;
    let time = 0.3;
    const velocityTemp = this.Velocity.getVelocity(this.differY) * 4;
    if (velocity) {
      this.differY = velocityTemp * 40 + this.differY;
      time = Math.abs(velocityTemp) * 0.1;
    }
    this.dom.style.transition = 'transform ' + (time < 0.3 ? 0.3 : time) + 's';
    if (this.differY <= -this.lineHeight / 2) {
      this.currentY += Math.floor(this.differY / this.lineHeight);
      if (this.currentY <= this.maxY) {
        this.currentY = this.maxY;
      }
    } else if (this.differY >= this.lineHeight / 2) {
      this.currentY += Math.floor(this.differY / this.lineHeight);
      if (this.currentY >= 0) {
        this.currentY = 0;
      }
    }
    if (this.selectedTarget.length > 0) {
      let hasKey = false;
      this.selectedTarget.forEach(item => {
        if (item.targetId === event.target.id) {
          hasKey = true;
          item.targetId = event.target.id;
          item.currentY = this.currentY;
        } else if (parseInt(item.targetId, 0) > parseInt(event.target.id, 0) && this.options.cascade) {
          item.currentY = 0;
        }
      });
      if (!hasKey) {
        this.selectedTarget.push({targetId: event.target.id, currentY: this.currentY});
      }
    } else {
      this.selectedTarget.push({targetId: event.target.id, currentY: this.currentY});
    }
    this.dom.style.transform = `translateY(${this.currentY * this.lineHeight}px)`;
    this.index = Math.floor(Math.abs(this.currentY));
    this.setCurrentSelected(parseInt(event.target.id, 0), this.index);
    this.options.onPickerChange.emit(this.combineReslut());
    this.onChange(this.combineReslut());
  }

  onChange = (_: any[]) => {
  };

  constructor(public elementRef: ElementRef, public options: PickerOptions) {
  }


  ngOnInit() {
    this.init();
  }

  init() {
    if (this.options.data.length > 0) {
      this.address = this.options.data;
    }
    if (this.data.length > 0) {
      this.selectedTarget = [];
      this.data = [];
    }
    this.data.push(this.generateArrayData(this.address));
    if (this.options.value.length > 0) {
      this.getInitValueIndex(this.data);
    } else {
      this.checkArrayDeep(this.address[0]);
      for (let index = 0; index < this.data.length; index++) {
        this.selectedTarget.push({targetId: `${index}`, currentY: 0});
      }
    }
  }

  getInitValueIndex(dataTemp) {
    this.selectedTarget = [];
    this.options.value.forEach((element, i) => {
      dataTemp.forEach((item, j) => {
        item.forEach((item1, k) => {
          if (element === (item1.label || item1) && i === j) {
            this.checkArrayDeep(this.data[i][k], false);
            this.selectedTarget.push({targetId: `${i}`, currentY: -k});
          }
        });
      });
    });
  }

  reloadPicker() {
    if (!this._picker || this._picker === undefined) {
      return;
    }
    this.currentPicker = this._picker.element.nativeElement;
    if (this.currentPicker && this.currentPicker.children.length > 0) {
      const self = this;
      setTimeout(() => {
        self.selectedTarget.forEach((item, i) => {
          self.currentPicker.children[i].children[2].style.transition = 'transform .3s';
          const index = parseInt(item.currentY, 0);
          self.currentPicker.children[i].children[2].style.transform = `translateY(${index * self.lineHeight}px)`;
        });
      }, 0);
    }
  }

  generateArrayData(targetArr) {
    const tempArr = [];
    if (targetArr instanceof Array) {
      targetArr.forEach((item, i) => {
        if (item instanceof Array) {
          const keys = Object.keys(item);
          const element = {};
          keys.forEach(key => {
            element[key] = targetArr[i][key] || targetArr[i];
          });
          tempArr.push(element);
        } else {
          tempArr.push(item);
        }
      });
      return tempArr;
    }
    return [];
  }

  checkArrayDeep(parent, init: boolean = true) {
    if (parent instanceof Object && parent['children'] && parent['children'].length > 0) {
      if (this.generateArrayData(parent['children']).length > 0 && this.data.length < this.options.cols) {
        this.data.push(this.generateArrayData(parent['children']));
        if (init) {
          this.checkArrayDeep(parent['children'][0]);
        }
      }
    }
  }

  ok() {
    if (this.options.updateNgModel) {
      this.options.updateNgModel(this.combineReslut());
    }
    this.animationState = 'bottom';
    this.options.dismiss.emit(this.combineReslut());
  }

  combineReslut() {
    const result = [];
    this.selectedTarget.forEach(item => {
      result.push(this.data[parseInt(item.targetId, 0)][-item.currentY]);
    });
    return result;
  }

  cancel() {
    this.animationState = 'bottom';
    this.options.dismiss.error({});
  }


  setCurrentSelected(target, index) {
    if (!this.options.cascade) {
      return;
    }
    this.data = this.data.slice(0, target + 1);
    this.checkArrayDeep(this.data[target][index]);
    setTimeout(() => {
      this.data.forEach((item, i) => {
        if (target !== `${i}` && i > target) {
          this._picker.element.nativeElement.children[i].children[2].style.transition = 'transform .3s';
          this._picker.element.nativeElement.children[i].children[2].style.transform = 'translateY(0px)';
        }
      });
    }, 0);
  }

  ngAfterViewInit() {
    this.reloadPicker();
  }

  ngOnDestroy(): void {
    this.animationState = 'bottom';
    this._unsubscribe$.next();
    this._unsubscribe$.complete();
  }
}

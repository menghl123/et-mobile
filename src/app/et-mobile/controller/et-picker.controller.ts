import {Injectable, Injector} from '@angular/core';
import {Overlay, OverlayConfig} from '@angular/cdk/overlay';
import {ComponentPortal} from '@angular/cdk/portal';
import {PickerOptions} from '../component/et-picker/picker-options.model';
import {PlatformLocation} from '@angular/common';
import {EtPickerComponent} from '../component/et-picker/et-picker.component';
import {Observable, throwError, timer} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {EtNavController} from './et-nav.controller';

@Injectable({
  providedIn: 'root'
})
export class EtPickerController {
  constructor(private overlay: Overlay,
              private platformLocation: PlatformLocation,
              private navController: EtNavController,
              private injector: Injector) {
  }

  builder() {
    return new EtPickerBuilder(this);
  }

  showPicker(options: PickerOptions = new PickerOptions()): Observable<any> {
    const childInjector = this.generateInjector(options);
    const overlayConfig = new OverlayConfig();
    overlayConfig.hasBackdrop = options.mask;
    overlayConfig.positionStrategy = this.overlay.position().global().centerVertically().centerHorizontally();

    const overlayRef = this.overlay.create(overlayConfig);

    overlayRef.attach(new ComponentPortal(EtPickerComponent, null, childInjector));
    overlayRef.backdropClick().subscribe(() => {
      this.platformLocation.back();
    });
    this.navController.pushState(overlayRef);

    return options.dismiss.pipe(
      tap(() => this.delayDispose()),
      catchError(error => {
        this.delayDispose();
        return throwError(error);
      })
    );
  }

  delayDispose() {
    const timerSub = timer(200).subscribe(() => {
      this.platformLocation.back();
      timerSub.unsubscribe();
    });
  }

  private generateInjector(config: PickerOptions): Injector {
    const options = new PickerOptions();
    Object.assign(options, config);

    const optionalParams: Array<any> = [
      'data',
      'value',
      'cols',
      'mask',
      'title',
      'okText',
      'dismissText',
      'disabled',
      'cascade',
      'onOk',
      'onPickerChange',
      'indicatorStyle'
    ];
    optionalParams.forEach(param => {
      if (typeof this[param] !== 'undefined') {
        (options as any)[param] = this[param];
      }
    });

    return Injector.create({
      providers: [{
        provide: PickerOptions,
        useValue: options
      }
      ],
      parent: this.injector
    });
  }
}

export class EtPickerBuilder {
  private options: PickerOptions = new PickerOptions();

  constructor(private pickerController: EtPickerController) {
  }

  showPicker() {
    return this.pickerController.showPicker(this.options);
  }

  data(data: any[]) {
    this.options.data = data;
    return this;
  }

  value(value: any[]) {
    this.options.value = value;
    return this;
  }

  cols(cols: number) {
    this.options.cols = cols;
    return this;
  }

  mask(mask: boolean) {
    this.options.mask = mask;
    return this;
  }

  title(title: string) {
    this.options.title = title;
    return this;
  }

  okText(text: string) {
    this.options.okText = text;
    return this;
  }

  dismissText(text: string) {
    this.options.dismissText = text;
    return this;
  }

  disabled(disabled: boolean) {
    this.options.disabled = disabled;
    return this;
  }

  cascade(cascade: boolean) {
    this.options.cascade = cascade;
    return this;
  }

  onPickerChange() {
    return this.options.onPickerChange;
  }


}


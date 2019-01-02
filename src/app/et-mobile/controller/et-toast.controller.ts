import {Injectable, Injector} from '@angular/core';
import {Overlay, OverlayConfig} from '@angular/cdk/overlay';
import {ComponentPortal} from '@angular/cdk/portal';
import {Observable} from 'rxjs';
import {ToastOptions} from '../component/et-toast/toast-options.model';
import {EtToastComponent} from '../component/et-toast/et-toast.component';

@Injectable({
  providedIn: 'root'
})
export class EtToastController {
  constructor(private overlay: Overlay,
              private injector: Injector) {
  }

  present(options: ToastOptions = new ToastOptions()): Observable<any> {
    const overlayConfig = new OverlayConfig();
    overlayConfig.hasBackdrop = false;
    overlayConfig.positionStrategy = this.getPositionConfig(options);

    const overlayRef = this.overlay.create(overlayConfig);
    options.ok = (param?: any) => {
      options.dismiss.emit(param);
      overlayRef.dispose();
    };

    options.cancel = (param?: any) => {
      options.dismiss.error(param);
      overlayRef.dispose();
    };

    const childInjector = this.generateInjector(options);

    overlayRef.attach(new ComponentPortal(EtToastComponent, null, childInjector));

    return options.dismiss;
  }

  builder() {
    return new EtToastBuilder(this);
  }

  private generateInjector(config: ToastOptions): Injector {
    const options = new ToastOptions();
    Object.assign(options, config);

    const optionalParams: Array<any> = [
      'message',
      'duration',
      'position',
    ];
    optionalParams.forEach(param => {
      if (typeof this[param] !== 'undefined') {
        (options as any)[param] = this[param];
      }
    });

    return Injector.create({
      providers: [{
        provide: ToastOptions,
        useValue: options
      }
      ],
      parent: this.injector
    });
  }

  private getPositionConfig(options: ToastOptions) {
    const config = this.overlay.position()
      .global();

    switch (options.position) {
      case 'top':
        config.top('10vh');
        break;
      case 'center':
        config.top('40vh');
        break;
      case 'bottom':
        config.top('90vh');
        break;
    }

    return config;
  }
}

export class EtToastBuilder {
  private options: ToastOptions = new ToastOptions();

  constructor(private toastController: EtToastController) {
  }

  present() {
    return this.toastController.present(this.options);
  }

  message(message: string) {
    this.options.message = message;
    return this;
  }

  duration(duration: number = 3000) {
    this.options.duration = duration;
    return this;
  }

  position(position: string) {
    this.options.position = position;
    return this;
  }

}


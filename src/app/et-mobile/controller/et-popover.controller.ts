import {ElementRef, Injectable, Injector} from '@angular/core';
import {Overlay, OverlayConfig} from '@angular/cdk/overlay';
import {ComponentPortal} from '@angular/cdk/portal';
import {Observable, throwError} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {PopItemInterface, PopverOptions} from '../component/et-popover/popver-options.model';
import {EtPopoverComponent} from '../component/et-popover/et-popover.component';

@Injectable({
  providedIn: 'root'
})
export class EtPopoverController {
  constructor(private overlay: Overlay,
              private injector: Injector) {
  }

  showPopover(options: PopverOptions = new PopverOptions()): Observable<any> {
    const childInjector = this.generateInjector(options);
    const overlayConfig = new OverlayConfig();
    overlayConfig.hasBackdrop = options.mask;
    overlayConfig.positionStrategy = this.getPositionConfig(options);
    overlayConfig.scrollStrategy = this.overlay.scrollStrategies.reposition(); // 更随滑动的策略

    const overlayRef = this.overlay.create(overlayConfig);

    overlayRef.attach(new ComponentPortal(EtPopoverComponent, null, childInjector));
    overlayRef.backdropClick().subscribe(() => {
      overlayRef.dispose();
    });

    return options.dismiss.pipe(
      tap(() => overlayRef.dispose()),
      catchError(error => {
        overlayRef.dispose();
        return throwError(error);
      })
    );
  }

  builder() {
    return new EtPopoverBuilder(this);
  }

  private generateInjector(config: PopverOptions): Injector {
    const options = new PopverOptions();
    Object.assign(options, config);

    const optionalParams: Array<any> = [
      'data',
      'mask',
      'target',
      'position',
    ];
    optionalParams.forEach(param => {
      if (typeof this[param] !== 'undefined') {
        (options as any)[param] = this[param];
      }
    });

    return Injector.create({
      providers: [{
        provide: PopverOptions,
        useValue: options
      }
      ],
      parent: this.injector
    });
  }

  private getPositionConfig(options: PopverOptions) {
    const config = this.overlay.position()
      .flexibleConnectedTo(options.target)
      .withLockedPosition(true);

    switch (options.position) {
      case 'top':
        config.withPositions([
          {
            originX: 'center',
            originY: 'top',
            overlayX: 'center',
            overlayY: 'bottom',
          }
        ]);
        break;
      case 'rightTop':
        config.withPositions([
          {
            originX: 'end',
            originY: 'top',
            overlayX: 'start',
            overlayY: 'bottom',
          }
        ]);
        break;
      case 'right':
        config.withPositions([
          {
            originX: 'end',
            originY: 'center',
            overlayX: 'start',
            overlayY: 'center',
          }
        ]);
        break;
      case 'rightBottom':
        config.withPositions([
          {
            originX: 'end',
            originY: 'bottom',
            overlayX: 'start',
            overlayY: 'top',
          }
        ]);
        break;
      case 'bottom':
        config.withPositions([
          {
            originX: 'center',
            originY: 'bottom',
            overlayX: 'center',
            overlayY: 'top',
            offsetX: 0,
            offsetY: 0
          }
        ]);
        break;
      case 'leftBottom':
        config.withPositions([
          {
            originX: 'start',
            originY: 'bottom',
            overlayX: 'end',
            overlayY: 'top',
          }
        ]);
        break;
      case 'left':
        config.withPositions([
          {
            originX: 'start',
            originY: 'center',
            overlayX: 'end',
            overlayY: 'center',
          }
        ]);
        break;
      case 'leftRight':
        config.withPositions([
          {
            originX: 'start',
            originY: 'top',
            overlayX: 'end',
            overlayY: 'bottom',
          }
        ]);
        break;
    }

    return config;
  }
}

export class EtPopoverBuilder {
  private options: PopverOptions = new PopverOptions();

  constructor(private popoverController: EtPopoverController) {
  }

  showPopover() {
    return this.popoverController.showPopover(this.options);
  }

  data(data: Array<PopItemInterface>) {
    this.options.data = this.options.data.concat(data);
    return this;
  }

  target(target: ElementRef) {
    this.options.target = target;
    return this;
  }

  position(position: string) {
    this.options.position = position;
    return this;
  }

  item(label: string, icon?: string) {
    this.options.data.push({
      label: label,
      icon: icon
    });
    return this;
  }

  mask(mask: boolean) {
    this.options.mask = mask;
    return this;
  }

}


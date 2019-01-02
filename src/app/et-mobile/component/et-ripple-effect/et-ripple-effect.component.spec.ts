import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtRippleEffectComponent } from './et-ripple-effect.component';

describe('EtRippleEffectComponent', () => {
  let component: EtRippleEffectComponent;
  let fixture: ComponentFixture<EtRippleEffectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtRippleEffectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtRippleEffectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

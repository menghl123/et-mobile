import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtIndicatorComponent } from './et-indicator.component';

describe('EtIndicatorComponent', () => {
  let component: EtIndicatorComponent;
  let fixture: ComponentFixture<EtIndicatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtIndicatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

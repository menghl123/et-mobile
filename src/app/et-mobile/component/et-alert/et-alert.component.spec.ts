import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtAlertComponent } from './et-alert.component';

describe('EtAlertComponent', () => {
  let component: EtAlertComponent;
  let fixture: ComponentFixture<EtAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtAlertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

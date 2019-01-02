import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtPickerComponent } from './et-picker.component';

describe('EtPickerComponent', () => {
  let component: EtPickerComponent;
  let fixture: ComponentFixture<EtPickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtPickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

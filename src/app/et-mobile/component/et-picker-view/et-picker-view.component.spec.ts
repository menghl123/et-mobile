import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtPickerViewComponent } from './et-picker-view.component';

describe('EtPickerViewComponent', () => {
  let component: EtPickerViewComponent;
  let fixture: ComponentFixture<EtPickerViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtPickerViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtPickerViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

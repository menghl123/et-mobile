import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PickerViewComponent } from './picker-view.component';

describe('PickerViewComponent', () => {
  let component: PickerViewComponent;
  let fixture: ComponentFixture<PickerViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PickerViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PickerViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

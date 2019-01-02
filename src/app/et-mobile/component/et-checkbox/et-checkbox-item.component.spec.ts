import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtCheckboxItemComponent } from './et-checkbox-item.component';

describe('EtCheckboxItemComponent', () => {
  let component: EtCheckboxItemComponent;
  let fixture: ComponentFixture<EtCheckboxItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtCheckboxItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtCheckboxItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

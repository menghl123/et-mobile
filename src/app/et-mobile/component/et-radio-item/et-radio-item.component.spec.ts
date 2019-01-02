import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtRadioItemComponent } from './et-radio-item.component';

describe('EtRadioItemComponent', () => {
  let component: EtRadioItemComponent;
  let fixture: ComponentFixture<EtRadioItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtRadioItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtRadioItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

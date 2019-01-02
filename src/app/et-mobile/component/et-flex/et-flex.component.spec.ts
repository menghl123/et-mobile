import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtFlexComponent } from './et-flex.component';

describe('EtFlexComponent', () => {
  let component: EtFlexComponent;
  let fixture: ComponentFixture<EtFlexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtFlexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtFlexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

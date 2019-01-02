import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtPopoverComponent } from './et-popover.component';

describe('EtPopoverComponent', () => {
  let component: EtPopoverComponent;
  let fixture: ComponentFixture<EtPopoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtPopoverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtPopoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

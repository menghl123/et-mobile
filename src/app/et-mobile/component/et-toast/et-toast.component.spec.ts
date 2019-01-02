import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtToastComponent } from './et-toast.component';

describe('EtToastComponent', () => {
  let component: EtToastComponent;
  let fixture: ComponentFixture<EtToastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtToastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtToastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

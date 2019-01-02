import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtBackdropComponent } from './et-backdrop.component';

describe('EtBackdropComponent', () => {
  let component: EtBackdropComponent;
  let fixture: ComponentFixture<EtBackdropComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtBackdropComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtBackdropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

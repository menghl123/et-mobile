import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtButtonComponent } from './et-button.component';

describe('EtButtonComponent', () => {
  let component: EtButtonComponent;
  let fixture: ComponentFixture<EtButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

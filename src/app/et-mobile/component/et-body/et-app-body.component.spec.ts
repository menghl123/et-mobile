import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtAppBodyComponent } from './et-app-body.component';

describe('EtAppBodyComponent', () => {
  let component: EtAppBodyComponent;
  let fixture: ComponentFixture<EtAppBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtAppBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtAppBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

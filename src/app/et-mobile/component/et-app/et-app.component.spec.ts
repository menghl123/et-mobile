import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtAppComponent } from './et-app.component';

describe('EtAppComponent', () => {
  let component: EtAppComponent;
  let fixture: ComponentFixture<EtAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

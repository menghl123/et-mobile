import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtTabComponent } from './et-tab.component';

describe('EtTabComponent', () => {
  let component: EtTabComponent;
  let fixture: ComponentFixture<EtTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

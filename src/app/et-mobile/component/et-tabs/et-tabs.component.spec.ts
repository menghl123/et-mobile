import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtTabsComponent } from './et-tabs.component';

describe('EtTabsComponent', () => {
  let component: EtTabsComponent;
  let fixture: ComponentFixture<EtTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

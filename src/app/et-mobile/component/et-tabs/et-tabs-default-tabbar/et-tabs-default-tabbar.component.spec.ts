import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtTabsDefaultTabbarComponent } from './et-tabs-default-tabbar.component';

describe('EtTabsDefaultTabbarComponent', () => {
  let component: EtTabsDefaultTabbarComponent;
  let fixture: ComponentFixture<EtTabsDefaultTabbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtTabsDefaultTabbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtTabsDefaultTabbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

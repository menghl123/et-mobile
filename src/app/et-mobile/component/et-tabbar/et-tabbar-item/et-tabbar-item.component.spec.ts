import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtTabbarItemComponent } from './et-tabbar-item.component';

describe('EtTabbarItemComponent', () => {
  let component: EtTabbarItemComponent;
  let fixture: ComponentFixture<EtTabbarItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtTabbarItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtTabbarItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

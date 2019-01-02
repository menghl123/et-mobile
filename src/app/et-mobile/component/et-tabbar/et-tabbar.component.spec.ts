import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtTabbarComponent } from './et-tabbar.component';

describe('EtTabbarComponent', () => {
  let component: EtTabbarComponent;
  let fixture: ComponentFixture<EtTabbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtTabbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtTabbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

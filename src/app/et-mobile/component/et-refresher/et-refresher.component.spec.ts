import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtRefresherComponent } from './et-refresher.component';

describe('EtRefresherComponent', () => {
  let component: EtRefresherComponent;
  let fixture: ComponentFixture<EtRefresherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtRefresherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtRefresherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

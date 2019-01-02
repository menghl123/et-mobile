import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtRefresherContentComponent } from './et-refresher-content.component';

describe('EtRefresherContentComponent', () => {
  let component: EtRefresherContentComponent;
  let fixture: ComponentFixture<EtRefresherContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtRefresherContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtRefresherContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

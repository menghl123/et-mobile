import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtDrawerComponent } from './et-drawer.component';

describe('EtDrawerComponent', () => {
  let component: EtDrawerComponent;
  let fixture: ComponentFixture<EtDrawerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtDrawerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtDrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtCardComponent } from './et-card.component';

describe('EtCardComponent', () => {
  let component: EtCardComponent;
  let fixture: ComponentFixture<EtCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

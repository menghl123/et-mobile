import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtCardHeaderComponent } from './et-card-header.component';

describe('EtCardHeaderComponent', () => {
  let component: EtCardHeaderComponent;
  let fixture: ComponentFixture<EtCardHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtCardHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtCardHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

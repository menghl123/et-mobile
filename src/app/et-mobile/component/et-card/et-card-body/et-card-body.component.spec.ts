import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtCardBodyComponent } from './et-card-body.component';

describe('EtCardBodyComponent', () => {
  let component: EtCardBodyComponent;
  let fixture: ComponentFixture<EtCardBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtCardBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtCardBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

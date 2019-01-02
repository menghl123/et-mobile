import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtIconComponent } from './et-icon.component';

describe('EtIconComponent', () => {
  let component: EtIconComponent;
  let fixture: ComponentFixture<EtIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

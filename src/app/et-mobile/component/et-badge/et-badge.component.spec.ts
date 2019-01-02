import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtBadgeComponent } from './et-badge.component';

describe('EtBadgeComponent', () => {
  let component: EtBadgeComponent;
  let fixture: ComponentFixture<EtBadgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtBadgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

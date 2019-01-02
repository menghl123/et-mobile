import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtGridViewComponent } from './et-grid-view.component';

describe('EtGridViewComponent', () => {
  let component: EtGridViewComponent;
  let fixture: ComponentFixture<EtGridViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtGridViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtGridViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

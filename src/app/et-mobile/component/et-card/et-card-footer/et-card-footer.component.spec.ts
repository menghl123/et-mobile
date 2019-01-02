import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtCardFooterComponent } from './et-card-footer.component';

describe('EtCardFooterComponent', () => {
  let component: EtCardFooterComponent;
  let fixture: ComponentFixture<EtCardFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtCardFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtCardFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

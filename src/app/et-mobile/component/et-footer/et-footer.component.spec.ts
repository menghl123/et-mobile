import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtFooterComponent } from './et-footer.component';

describe('EtFooterComponent', () => {
  let component: EtFooterComponent;
  let fixture: ComponentFixture<EtFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

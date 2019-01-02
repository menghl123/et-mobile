import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtCarouselIndicatorComponent } from './et-carousel-indicator.component';

describe('EtCarouselIndicatorComponent', () => {
  let component: EtCarouselIndicatorComponent;
  let fixture: ComponentFixture<EtCarouselIndicatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtCarouselIndicatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtCarouselIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

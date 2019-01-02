import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtCarouselComponent } from './et-carousel.component';

describe('EtCarouselComponent', () => {
  let component: EtCarouselComponent;
  let fixture: ComponentFixture<EtCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

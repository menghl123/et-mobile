import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtCarouselItemComponent } from './et-carousel-item.component';

describe('EtCarouselItemComponent', () => {
  let component: EtCarouselItemComponent;
  let fixture: ComponentFixture<EtCarouselItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtCarouselItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtCarouselItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

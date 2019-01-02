import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyHouseComponent } from './buy-house.component';

describe('BuyHouseComponent', () => {
  let component: BuyHouseComponent;
  let fixture: ComponentFixture<BuyHouseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyHouseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyHouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ByHouseIndexComponent } from './by-house-index.component';

describe('ByHouseIndexComponent', () => {
  let component: ByHouseIndexComponent;
  let fixture: ComponentFixture<ByHouseIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ByHouseIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ByHouseIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

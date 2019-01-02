import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtListViewDividerComponent } from './et-list-view-divider.component';

describe('EtListViewDividerComponent', () => {
  let component: EtListViewDividerComponent;
  let fixture: ComponentFixture<EtListViewDividerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtListViewDividerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtListViewDividerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

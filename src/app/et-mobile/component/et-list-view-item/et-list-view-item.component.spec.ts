import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtListViewItemComponent } from './et-list-view-item.component';

describe('EtListViewItemComponent', () => {
  let component: EtListViewItemComponent;
  let fixture: ComponentFixture<EtListViewItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtListViewItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtListViewItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

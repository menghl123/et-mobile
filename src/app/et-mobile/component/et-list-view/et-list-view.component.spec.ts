import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtListViewComponent } from './et-list-view.component';

describe('EtListViewComponent', () => {
  let component: EtListViewComponent;
  let fixture: ComponentFixture<EtListViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtListViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

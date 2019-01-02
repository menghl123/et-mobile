import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtFlexItemComponent } from './et-flex-item.component';

describe('EtFlexItemComponent', () => {
  let component: EtFlexItemComponent;
  let fixture: ComponentFixture<EtFlexItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtFlexItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtFlexItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

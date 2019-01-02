import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtInputItemComponent } from './et-input-item.component';

describe('EtInputItemComponent', () => {
  let component: EtInputItemComponent;
  let fixture: ComponentFixture<EtInputItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtInputItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtInputItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

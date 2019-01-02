import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtAppBarComponent } from './et-app-bar.component';

describe('EtAppBarComponent', () => {
  let component: EtAppBarComponent;
  let fixture: ComponentFixture<EtAppBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtAppBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtAppBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

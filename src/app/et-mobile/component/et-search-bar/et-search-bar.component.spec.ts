import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtSearchBarComponent } from './et-search-bar.component';

describe('EtSearchBarComponent', () => {
  let component: EtSearchBarComponent;
  let fixture: ComponentFixture<EtSearchBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtSearchBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtSearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

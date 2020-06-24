import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryDetailsGridComponent } from './country-details-grid.component';

describe('CountryDetailsGridComponent', () => {
  let component: CountryDetailsGridComponent;
  let fixture: ComponentFixture<CountryDetailsGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryDetailsGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryDetailsGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

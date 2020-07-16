import { Spectator, createComponentFactory } from '@ngneat/spectator';
import { AppComponent } from './app.component';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { MemoizedSelector } from '@ngrx/store';
import { getRegionsList, getCountryListForRegion, getCountryDetails, getSelectedRegions } from './store/selector/app.selector';
import { IAppState } from './store/state/app.state';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { ICountryDetailsViewModel } from './models/api.model';
import { SetSelectedRegion } from './store/action/region.action';
import { GetCountries, SetSelectedCountry } from './store/action/country.action';

describe('App component', () => {
  let fixture: ComponentFixture<AppComponent>;
  let mockStore: MockStore;
  let mockRegionList: MemoizedSelector<IAppState, string[]>;
  let mockSelectedRegion: MemoizedSelector<IAppState, string>;
  let mockCountryList: MemoizedSelector<IAppState, string[]>;
  let mockSelectedCountryDetails: MemoizedSelector<IAppState, ICountryDetailsViewModel>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideMockStore()],
      declarations: [AppComponent],
    });

    fixture = TestBed.createComponent(AppComponent);
    mockStore = TestBed.inject(MockStore);
    mockRegionList = mockStore.overrideSelector(getRegionsList, []);
    mockSelectedRegion = mockStore.overrideSelector(getSelectedRegions, '');
    mockCountryList = mockStore.overrideSelector(getCountryListForRegion, []);

    mockSelectedCountryDetails = mockStore.overrideSelector(getCountryDetails, {} as ICountryDetailsViewModel);

    fixture.detectChanges();
  });

  it('should have a success class by default', () => {
    expect(fixture.componentInstance.title).toEqual('country-details');
  });

  it('onRegionChange', () => {
    const regionAction = new SetSelectedRegion('region1');
    const getCountry = new GetCountries('region1');
    const spy = spyOn(mockStore, 'dispatch');
    fixture.componentInstance.onRegionChange('region1');
    expect(spy).toHaveBeenCalledWith(regionAction);
    expect(spy).toHaveBeenCalledWith(getCountry);
  });

  it('onCountryChange', () => {
    const countryAction = new SetSelectedCountry('country1');
    const spy = spyOn(mockStore, 'dispatch');
    fixture.componentInstance.onCountryChange('country1');
    expect(spy).toHaveBeenCalledWith(countryAction);
  });

});

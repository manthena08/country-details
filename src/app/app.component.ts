import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { IAppState } from './store/state/app.state';
import { getRegionsList, getCountryListForRegion, getCountryDetails } from './store/selector/app.selector';
import { GetRegions, GetSelectedRegion, SetSelectedRegion } from './store/action/region.action';
import { ApiService } from './services/api.service';
import { SetCountryDetailList, SetSelectedCountry, GetCountries } from './store/action/country.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  title = 'country-details';

  regionsList$ = this.store.pipe(select(getRegionsList));
  selectedRegion$ = this.store.pipe(select((state: IAppState) => state.region.selectedRegion));
  countryList$ = this.store.pipe(select(getCountryListForRegion));
  selectedCountryDetails$ = this.store.pipe(select(getCountryDetails));

  constructor(private store: Store<IAppState>, private apiService: ApiService) {

  }

  ngOnInit() {
    this.store.dispatch(new GetRegions());
    this.store.dispatch(new GetSelectedRegion());
  }

  onRegionChange(value: string) {
    this.store.dispatch(new SetSelectedRegion(value));
    this.store.dispatch(new GetCountries(value));
  }

  onCountryChange(value: string) {
    this.store.dispatch(new SetSelectedCountry(value));
  }
}

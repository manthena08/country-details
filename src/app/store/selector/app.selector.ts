import { createSelector } from '@ngrx/store';
import { IAppState } from '../state/app.state';

export const getRegionsList = createSelector(
    (state: IAppState) => state.region.regionDropdownList,
    regionsList => regionsList
);

export const getCountryListForRegion = createSelector(
    (state: IAppState) => state.country.countryServerResponse,
    (countryList) => countryList.map(country => country.name)
);

export const getCountryDetails = createSelector(
    [(state: IAppState) => state.country.countryServerResponse, (state: IAppState) => state.country.selectedCountry],
    (countryList, selectedCountry) => countryList.find(country => country.name === selectedCountry)
);
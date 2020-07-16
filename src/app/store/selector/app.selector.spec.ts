import * as appSelector from './app.selector';
import { IAppState } from '../state/app.state';
import { ICountryDetailsViewModel } from 'src/app/models/api.model';

describe('App selectors', () => {
    const stateApp: IAppState = {
        region: {
            regionDropdownList: [],
            selectedRegion: ''
        },
        country: {
            selectedCountry: 'US',
            countryDropdownList: [],
            countryDetails: undefined,
            countryServerResponse: [
                {
                    name: 'US'
                } as ICountryDetailsViewModel,
                {
                    name: 'UK'
                } as ICountryDetailsViewModel
            ]
        }
    };

    it('getRegionsList', () => {
        expect(appSelector.getRegionsList(stateApp)).toBe(stateApp.region.regionDropdownList);
    });

    it('getSelectedRegions', () => {
        expect(appSelector.getSelectedRegions(stateApp)).toBe(stateApp.region.selectedRegion);
    });

    it('getCountryListForRegion', () => {
        const countryMatch = {
            name: 'US'
        } as ICountryDetailsViewModel;
        expect(appSelector.getCountryListForRegion(stateApp)).toEqual(['US', 'UK']);
    });

    it('getCountryDetails', () => {
        const countryMatch = {
            name: 'US'
        } as ICountryDetailsViewModel;
        expect(appSelector.getCountryDetails(stateApp)).toEqual(countryMatch);
    });
});

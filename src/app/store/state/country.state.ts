import { ICountryDetailsViewModel } from 'src/app/models/api.model';

export interface ICountryState {
    countryServerResponse: ICountryDetailsViewModel[];
    selectedCountry: string;
    countryDropdownList: string[];
    countryDetails: any;
}

export const initialCountryState: ICountryState = {
    selectedCountry: '',
    countryDropdownList: [],
    countryDetails: undefined,
    countryServerResponse: []
};

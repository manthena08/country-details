import { initialCountryState, ICountryState } from '../state/country.state';
import { ECountryAction, CountryActions } from '../action/country.action';

export const countryReducer = (state = initialCountryState, action: CountryActions): ICountryState => {
    switch (action.type) {
        case ECountryAction.SetSelectedCountry: {
            return {
                ...state,
                selectedCountry: action.payload
            };
        }
        case ECountryAction.SetCountryDetailList: {
            return {
                ...state,
                countryServerResponse: action.payload
            };
        }
        default:
            return state;
    }
};
import { IRegionState, initialRegionState } from './region.state';
import { initialCountryState, ICountryState } from './country.state';

export interface IAppState {
    region: IRegionState;
    country: ICountryState;
}

export const initialAppState: IAppState = {
    region: initialRegionState,
    country: initialCountryState
};

export function getInitialState(): IAppState {
    return initialAppState;
}

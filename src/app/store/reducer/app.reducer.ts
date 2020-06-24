import { ActionReducerMap } from '@ngrx/store';
import { IAppState } from '../state/app.state';
import { regionReducer } from './region.reducer';
import { countryReducer } from './country.reducer';

export const appReducers: ActionReducerMap<IAppState, any> = {
    region: regionReducer,
    country: countryReducer
};
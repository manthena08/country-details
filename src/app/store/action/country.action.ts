import { Action } from '@ngrx/store';
import { ICountryDetailsViewModel } from 'src/app/models/api.model';

export enum ECountryAction {
    GetCountries = '[Country] Get Countries',
    SetCountryDetailList = '[Country] Set Country Detail List',
    SetSelectedCountry = '[Country] Set Selected Country'
}

export class GetCountries implements Action {
    public readonly type = ECountryAction.GetCountries;
    constructor(public payload: string) { }

}

export class SetSelectedCountry implements Action {
    public readonly type = ECountryAction.SetSelectedCountry;
    constructor(public payload: string) { }
}

export class SetCountryDetailList implements Action {
    public readonly type = ECountryAction.SetCountryDetailList;
    constructor(public payload: ICountryDetailsViewModel[]) { }
}

export type CountryActions = GetCountries | SetSelectedCountry | SetCountryDetailList;
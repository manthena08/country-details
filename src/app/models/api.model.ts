export interface ICountryDetailsViewModel {
    name: string;
    topLevelDomain?: string[];
    alpha2Code?: string;
    alpha3Code?: string;
    callingCodes?: string[];
    capital?: string;
    altSpellings?: string[];
    region: string;
    subregion?: string;
    population?: number;
    latlng?: number[];
    demonym?: string;
    area?: number;
    gini?: null;
    timezones?: string[];
    borders?: [];
    nativeName?: string;
    numericCode?: number;
    currencies?: object[];
    languages?: object[];
    translations?: object;
    flag?: string;
    regionalBlocs?: object[];
    cioc?: string;
}

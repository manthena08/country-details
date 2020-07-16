import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICountryDetailsViewModel } from '../models/api.model';

@Injectable({
    providedIn: 'root'
})

export class ApiService {
    baseUrl = 'https://restcountries.eu/rest/v2/region/';
    constructor(private http: HttpClient) { }

    getCountryDetails(region: string) {
        const url = `${this.baseUrl}${region}`;
        return this.http.get<ICountryDetailsViewModel[]>(url);
    }
}

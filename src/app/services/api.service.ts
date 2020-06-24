import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICountryDetailsViewModel } from '../models/api.model';

@Injectable({
    providedIn: 'root'
})

export class ApiService {
    constructor(private http: HttpClient) { }

    getCountryDetails(region: string) {
        const url = `https://restcountries.eu/rest/v2/region/${region}`;
        return this.http.get<ICountryDetailsViewModel[]>(url);
    }
}

import { TestBed } from '@angular/core/testing';

import { ApiService } from './api.service';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { ICountryDetailsViewModel } from '../models/api.model';

describe('ApiService', () => {
    let service: ApiService;
    let httpMock: HttpTestingController;
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [ApiService]
        });
        service = TestBed.inject(ApiService);
        httpMock = TestBed.inject(HttpTestingController);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('getCountryDetails', () => {
        const dummyPosts: ICountryDetailsViewModel[] = [{
            name: 'country1',
            region: 'sample'
        },
        {
            name: 'country1',
            region: 'sample'
        }
        ];
        service.getCountryDetails('region1').subscribe(response => {
            expect(response.length).toBe(2);
            expect(response).toEqual(dummyPosts);
        });
        const request = httpMock.expectOne(`${service.baseUrl}region1`);
        expect(request.request.method).toBe('GET');
        request.flush(dummyPosts);
    })
});
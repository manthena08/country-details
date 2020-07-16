import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { ECountryAction, GetCountries, SetCountryDetailList } from '../action/country.action';
import { Store, select } from '@ngrx/store';
import { IAppState } from '../state/app.state';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';

@Injectable()
export class CountryEffects {
    loadCountryDetails$ = createEffect(() =>
        this.actions$.pipe(
            ofType<GetCountries>(ECountryAction.GetCountries),
            mergeMap((action) => this.apiService.getCountryDetails(action.payload)
                .pipe(
                    map(movies => new SetCountryDetailList(movies))
                )
            )
        )
    );

    constructor(
        private apiService: ApiService,
        private actions$: Actions,
        private store: Store<IAppState>
    ) { }
}

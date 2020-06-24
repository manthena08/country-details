import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { HeaderComponent } from './components/header/header.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { appReducers } from './store/reducer/app.reducer';
import { CountryDetailsGridComponent } from './components/country-details-grid/country-details-grid.component';
import { EffectsModule } from '@ngrx/effects';
import { CountryEffects } from './store/effect/country.effects';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DropdownComponent,
    CountryDetailsGridComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([CountryEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, OnInit, Input } from '@angular/core';
import { ICountryDetailsViewModel } from '../../models/api.model';

@Component({
  selector: 'app-country-details-grid',
  templateUrl: './country-details-grid.component.html',
  styleUrls: ['./country-details-grid.component.scss']
})
export class CountryDetailsGridComponent implements OnInit {

  @Input() countryDetails: ICountryDetailsViewModel;

  constructor() { }

  ngOnInit(): void {
  }

}

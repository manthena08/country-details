# CountryDetails

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.9.

## Steps to run the project

1. Do npm install on the root level.
2. ng serve to serve the project.

## How this will work.
App component serves as the core component and dispatch all the actions needed for the application to run.
First select the region in the dropdown. based on that selection App component will send the api call to get the data for country details. When the user select a country a grid will be displayed with some details.


## Things needs to be improved.
1. Need to handle error handling.
2. can show a loading icon when the api response is pending.
3. Once the data is loaded for both the region we can cache the responses in useeffect and avoid calling the api again.

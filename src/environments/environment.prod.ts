import { EnvironmentModel } from "./models/environment.models";

export const environment: EnvironmentModel = {
  apiDefault: 'https://heroesappbackend.azurewebsites.net/api',//ejemplo url en otro entorno, los environments pueden ser diferentes, mirar los cambios en el angular.json.
  production: true,

};

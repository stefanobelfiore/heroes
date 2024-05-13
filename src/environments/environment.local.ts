import { EnvironmentModel } from "./models/environment.models";

export const environment: EnvironmentModel = {
  apiDefault: 'http://localhost:3000',//url en entorno local, los environments pueden ser diferentes, mirar los cambios en el angular.json.
  production: false,
};
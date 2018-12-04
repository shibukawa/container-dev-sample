export interface IEnvironment {
  production: boolean;
  label: string;
  color: string;
}
import { CONFIG } from './environment';

export const environment = window['CONFIG'] ? JSON.parse(JSON.stringify(window['CONFIG'])) as IEnvironment : CONFIG as IEnvironment;

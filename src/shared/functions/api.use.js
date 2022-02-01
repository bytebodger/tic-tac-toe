import bodyParser from 'body-parser';
import { the } from '../objects/the';
import { allow } from './allow.js';

export const apiUse = (api = the.empty.function) => {
   allow.aFunction(api);
   api.use(bodyParser.json());
};

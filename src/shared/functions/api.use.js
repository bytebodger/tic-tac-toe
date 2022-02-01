import bodyParser from 'body-parser';
import { the } from '../objects/the';
import { allow } from '@toolz/allow';

export const apiUse = (api = the.empty.function) => {
   allow.aFunction(api);
   api.use(bodyParser.json());
};

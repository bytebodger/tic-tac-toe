import bodyParser from 'body-parser';
import { allow } from '../classes/allow';
import { the } from '../objects/the';

export const apiUse = (api = the.empty.function) => {
   allow.aFunction(api);
   api.use(bodyParser.json());
};

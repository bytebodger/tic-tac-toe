import { getRoot } from '../../endpoints/get.root';
import { the } from '../objects/the';
import { allow } from '@toolz/allow';

export const createEndpoints = (api = the.empty.function) => {
   allow.aFunction(api);
   api.get('/', getRoot);
   //api.post('/auth', postAuth);
   //api.post('/registration', postRegistration);
};

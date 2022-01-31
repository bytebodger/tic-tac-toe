import { postAuth } from '../../endpoints/auth/post.auth';
import { getRoot } from '../../endpoints/get.root';
import { postRegistration } from '../../endpoints/registration/post.registration';
import { allow } from '../classes/allow';
import { the } from '../objects/the';

export const createEndpoints = (api = the.empty.function) => {
   allow.aFunction(api);
   api.get('/', getRoot);
   api.post('/auth', postAuth);
   api.post('/registration', postRegistration);
};

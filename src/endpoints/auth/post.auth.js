import { is } from '../../shared/objects/is';
import { allow } from '@toolz/allow';

export const postAuth = (request = {}, response = {}) => {
   allow.anObject(request, is.not.empty).anObject(response, is.not.empty);
   response.json({auth: 'reached'});
};

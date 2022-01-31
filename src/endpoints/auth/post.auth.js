import { allow } from '../../shared/classes/allow';
import { is } from '../../shared/objects/is';

export const postAuth = (request = {}, response = {}) => {
   allow.anObject(request, is.not.empty).anObject(response, is.not.empty);
   response.json({auth: 'reached'});
};

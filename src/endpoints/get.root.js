import { allow } from '../shared/classes/allow';
import { getBaseResponse } from '../shared/functions/get.base.response';
import { is } from '../shared/objects/is';

export const getRoot = (request = {}, response = {}) => {
   allow.anObject(request, is.not.empty).anObject(response, is.not.empty);
   let json = getBaseResponse();
   json.data = {
      endpoints: {
         registration: 'Requires a single email address.  An email is sent to that address with a verification link.  Registration is not complete until the verification URL has been loaded.  The verification link expires in 2 hours.',
      },
   };
   response.json(json);
};

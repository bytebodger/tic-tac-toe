import { getBaseResponse } from '../../shared/functions/get.base.response';
import { is } from '../../shared/objects/is';
import { allow } from '../../shared/functions/allow.js';

export const postRegistration = (request = {}, response = {}) => {
   let json = getBaseResponse();
   try {
      allow.anObject(request, is.not.empty).anObject(response, is.not.empty).anInstanceOf(request.body, {}).aString(request.body.emailAddress, is.not.empty);
   } catch (error) {
      json.errors.push(error.toString());
      return response.json(json);
   }
   json.data.register = 'reached';
   response.json(json);
};

import { getBaseResponse } from '../shared/functions/get.base.response';
import { is } from '../shared/objects/is';
import { allow } from '../shared/functions/allow.js';

export const getRoot = (request = {}, response = {}) => {
   allow.anObject(request, is.not.empty).anObject(response, is.not.empty);
   let json = getBaseResponse();
   json.endpoints = {
      get: {
         "/": "Documents the behavior of this API",
         "/game/start": "Returns a blank game object",
      },
   };
   response.json(json);
};

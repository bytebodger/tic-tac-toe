import { getBaseResponse } from '../../shared/functions/get.base.response';
import { is } from '../../shared/objects/is';
import { allow } from '../../shared/functions/allow.js';
import { getNewGameObject } from '../../shared/functions/get.new.game.object.js';

export const getStart = (request = {}, response = {}) => {
   allow.anObject(request, is.not.empty).anObject(response, is.not.empty);
   let json = getBaseResponse();
   json.game = getNewGameObject();
   response.json(json);
};

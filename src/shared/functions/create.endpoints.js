import { getRoot } from '../../endpoints/get.root';
import { the } from '../objects/the';
import { allow } from './allow.js';
import { getStart } from '../../endpoints/game/get.start.js';
import { postMove } from '../../endpoints/game/post.move.js';

export const createEndpoints = (api = the.empty.function) => {
   allow.aFunction(api);
   api.get('/', getRoot);
   api.get('/game/start', getStart);
   api.post('/game/move', postMove);
};

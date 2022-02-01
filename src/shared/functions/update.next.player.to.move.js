import { getNewGameObject } from './get.new.game.object.js';
import { allow } from './allow.js';

export const updateNextPlayerToMove = (game = getNewGameObject()) => {
   allow.anInstanceOf(game, getNewGameObject());
   game.nextPlayerToMove = game.nextPlayerToMove === 0 ? 1 : 0;
   return game;
};

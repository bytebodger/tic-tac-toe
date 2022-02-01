import { getBaseResponse } from '../../shared/functions/get.base.response';
import { allow } from '../../shared/functions/allow.js';
import { getMoveObject } from '../../shared/functions/get.move.object.js';
import { getNewGameObject } from '../../shared/functions/get.new.game.object.js';
import { updateWinner } from '../../shared/functions/update.winner.js';
import { updateNextPlayerToMove } from '../../shared/functions/update.next.player.to.move.js';

export const postMove = (request = [], response = {}) => {
   let json = getBaseResponse();
   // the request must supply a valid game object and valid move object
   try {
      allow.anInstanceOf(request.body.game, getNewGameObject()).anInstanceOf(request.body.move, getMoveObject());
   } catch (error) {
      json.errors.push(error);
   }
   const {game, move} = request.body;
   json.game = game;
   // the game must have a valid nextPlayerToMove value
   if (game.nextPlayerToMove !== 0 && game.nextPlayerToMove !== 1)
      json.errors.push('The game object must have a nextPlayerToMove value');
   // the game must be undetermined before the move is submitted
   if (game.winner !== null)
      json.errors.push('Invalid move - a winner has already been declared');
   // no game can have more than 9 moves
   if (game.moves.length > 9)
      json.errors.push('No more moves allowed');
   // the nextPlayerToMove must be 0 or 1
   try {
      allow.anInteger(game.nextPlayerToMove, 0, 1);
   } catch (error) {
      json.errors.push('The nextPlayerToMove must be 0 or 1');
   }
   // move.player must be 0 or 1
   if (move.player !== 0 && move.player !== 1)
      json.errors.push('The player moving must be 0 or 1');
   // move.player must equal nextPlayerToMove
   if (move.player !== game.nextPlayerToMove)
      json.errors.push('The player moving does not match nextPlayerToMove');
   // player move must be a valid position on the board
   try {
      allow.anInteger(move.x, 0, 1).anInteger(move.y, 0, 1);
   } catch (error) {
      json.errors.push('The requested move is outside the bounds of the board');
   }
   // player move cannot duplicate an existing move
   if (game.moves.some(previousMove => previousMove.x === move.x && previousMove.y === move.y))
      json.errors.push('The requested move has already been taken on the board');
   if (json.errors.length > 0)
      return response.json(json);
   game.moves.push(move);
   json.game = updateWinner(game);
   json.game = updateNextPlayerToMove(game);
   response.json(json);
};

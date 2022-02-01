import { getNewGameObject } from './get.new.game.object.js';
import { allow } from './allow.js';

export const updateWinner = (game = getNewGameObject()) => {
   allow.anInstanceOf(game, getNewGameObject());
   const playerMoves = game.moves.filter(move => move.player === game.nextPlayerToMove);
   // cannot win until at least 3 moves are made
   if (playerMoves.length < 3) {
      game.winner = null;
      return game;
   }
   // check for 3-in-a-row along all X and Y axes, as well as diagonally
   if (
      playerMoves.filter(move => move.x === 0).length === 3
      || playerMoves.filter(move => move.x === 1).length === 3
      || playerMoves.filter(move => move.x === 2).length === 3
      || playerMoves.filter(move => move.y === 0).length === 3
      || playerMoves.filter(move => move.y === 1).length === 3
      || playerMoves.filter(move => move.y === 2).length === 3
      || (
         playerMoves.some(move => move.x === 0 && move.y === 0)
         && playerMoves.some(move => move.x === 1 && move.y === 1)
         && playerMoves.some(move => move.x === 2 && move.y === 2)
      )
      || (
         playerMoves.some(move => move.x === 0 && move.y === 2)
         && playerMoves.some(move => move.x === 1 && move.y === 1)
         && playerMoves.some(move => move.x === 2 && move.y === 0)
      )
   ) {
      game.winner = 'Winner: Player ' + game.nextPlayerToMove;
   }
   // a game with no winner after 9 moves is a draw
   if (game.moves.length === 9 && game.winner === null)
      game.winner = 'Draw';
   return game;
};

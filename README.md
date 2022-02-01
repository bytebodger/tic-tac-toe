# tic-tac-toe

Basic assumptions

- The app is built as a Node/Express API.
- Writing it as an API ensures that it can be openly consumed by any independent module with HTTP/S capabilities.
- It's designed to be stateless. Every call to `POST /game/move` requires that a valid game object, and a valid move object, be passed in. Assuming they are both valid, an updated game object is returned.
- The `allow` library function is used to ensure the integrity of inputs.
- Players are tracked as `0` and `1` (not `X` and `Y`). This was done to avoid confusion with the board coordinates, which use `x` and `y`.

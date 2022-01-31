import { allow } from '../classes/allow';
import { the } from '../objects/the';

export const setListener = (api = the.empty.function, port = the.default.port) => {
   allow.aFunction(api).anInteger(port, 80);
   api.listen(port, () => console.log(`Listening on port ${port}`));
};

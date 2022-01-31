import express from 'express';
import { apiUse } from './shared/functions/api.use';
import { createEndpoints } from './shared/functions/create.endpoints';
import { setListener } from './shared/functions/set.listener';
import { the } from './shared/objects/the';

const api = express();
const port = parseInt(process.env.PORT, 10) || the.default.port;
apiUse(api);
createEndpoints(api);
setListener(api, port);

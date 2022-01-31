import compression from 'compression';
import express from 'express';
import path from 'path';
import { config } from 'dotenv';

import { router } from './public/server';
import { logger } from './public/server/config/winston';

const PORT = 3000; 
const NODE_ENV = 'development';
const oneYear = 31536000000;
const app = express();

app.use(compression());
app.use(
  '*/static',
  express.static(path.resolve(__dirname, 'public'), { maxAge: oneYear })
);

app.use(router);

app.listen(PORT, () =>
  logger.info(
    `######## app running on port ${PORT}, using env ${NODE_ENV} ########`
  )
);

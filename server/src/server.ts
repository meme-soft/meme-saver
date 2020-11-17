import express, { Request, Response } from 'express';
import cors from 'cors';

import morgan from 'morgan';

import memes from './memes';
import config from './config';
import uploadsRouter from './uploads';
import logger from './logger';
import setup from './setup';

const app: express.Application = express();

app.use(cors());
app.use(morgan('tiny')); // logging incoming request and response

app.use('/api/v1/meme/uploads', uploadsRouter);
app.use('/api/v1/meme/', memes);

app.get('/health', (req: Request, res: Response) => {
  res.send('alive');
});

setup(() => {
  app.listen(config.port, async () => {
    logger.info(`listening at http://localhost:${config.port}`);
  });
});

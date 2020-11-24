import express, { Request, Response } from 'express';
import Meme from './db/meme';
import logger from './logger';

const oneMemeRouter = express.Router({ mergeParams: true });

oneMemeRouter.get('/', (req: Request, res: Response) => {
  const { id } = req.params;
  logger.info(id);
  Meme.findById(id)
    .then((meme) => {
      res.json(meme);
    })
    .catch((err) => {
      res.json({
        message: err.message,
      });
    });
});

export default oneMemeRouter;

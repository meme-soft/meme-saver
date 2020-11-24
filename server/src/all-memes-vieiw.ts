import express, { Request, Response } from 'express';
import meme from './db/meme';

const allMemesRouter = express.Router();

allMemesRouter.get('/', (req: Request, res: Response) => {
  meme.find()
    .then((memes) => {
      res.json(memes);
    })
    .catch((err) => {
      res.json({
        message: err.message,
      });
    });
});

export default allMemesRouter;

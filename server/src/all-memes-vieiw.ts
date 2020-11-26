import express, { Request, Response } from 'express';
import Meme from './db/meme';

const allMemesRouter = express.Router();

allMemesRouter.get('/list', (req: Request, res: Response) => {
  Meme.find()
    .then((memes) => {
      res.json(memes.map((meme) => meme.transform()));
    })
    .catch((err) => {
      res.json({
        message: err.message,
      });
    });
});

export default allMemesRouter;

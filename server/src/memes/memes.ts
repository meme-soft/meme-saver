import express, { Request, Response } from 'express';

import logger from '../logger';
import Meme from '../db/meme';
import { uploadMiddleware, errorHanlderMiddleware } from './memes-middleware';
import utils from './utils';

const memes: express.Router = express.Router();

const memesPostMiddleware = [uploadMiddleware, errorHanlderMiddleware];

memes.post('/', memesPostMiddleware, async (req: Request, res: Response) => {
  try {
    const meme = await Meme.create({
      name: req.body.name,
      description: req.body.description,
      tags: req.body.tags,
      url: utils.makeUploadUrl(req.file.filename),
      date: new Date(),
    });
    res.status(201).send(meme);
  } catch (e) {
    logger.error(e);
    res.sendStatus(500);
  }
});

export default memes;

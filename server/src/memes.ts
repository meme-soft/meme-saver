import express, { Request, Response } from 'express';
import multer from 'multer';
import logger from './logger';
import config from './config';
import Meme from './db/meme';

const memes: express.Router = express.Router();

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, config.uploadPath);
  },
  filename(req, file, cb) {
    cb(null, `${file.originalname}-${Date.now()}`);
  },
});
const upload = multer({ storage }).single('file');

const makeUploadUrl = (filename: string): string => {
  const baseUrl: string = `${config.host}:${config.port}`;
  return `${baseUrl}/api/v1/meme/uploads/${filename}`;
};

memes.post('/', upload, async (req: Request, res: Response) => {
  try {
    const meme = await Meme.create({
      name: req.body.name,
      description: req.body.description,
      tags: req.body.tags,
      url: makeUploadUrl(req.file.filename),
    });
    res.sendStatus(201).send(meme);
  } catch (e) {
    logger.error(e);
    res.sendStatus(500);
  }
});

export default memes;

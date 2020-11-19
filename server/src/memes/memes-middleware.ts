import multer from 'multer';
import {
  Request, Response, RequestHandler, Express,
} from 'express';

import config from '../config';

const IMAGE_MIME_TYPES: Array<string> = ['image/png', 'image/jpg', 'image/jpeg'];

class InvalidFileTypeError extends Error {}

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, config.uploadPath);
  },
  filename(req, file, cb) {
    cb(null, `${file.originalname}-${Date.now()}`);
  },
});

const fileFilter = (req: Request, file: Express.Multer.File, callback: Function) => {
  if (!IMAGE_MIME_TYPES.includes(file.mimetype)) {
    return callback(new InvalidFileTypeError(`invalid file type: ${file.mimetype}`));
  }
  return callback(null, true);
};

export const uploadMiddleware = multer({ storage, fileFilter }).single('file');

export const errorHanlderMiddleware = (err: Error, req: Request, res: Response, next: RequestHandler) => {
  if (err instanceof InvalidFileTypeError) {
    return res.status(400).json({ message: err.message });
  }

  return res.status(500).json({ message: err.message });
};

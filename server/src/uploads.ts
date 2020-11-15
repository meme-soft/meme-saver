import path from 'path';
import express, { Request, Response } from 'express';
import config from './config';

const uploadsRouter = express.Router();

uploadsRouter.get('/:fileName', (req: Request, res: Response) => {
  const { fileName } = req.params;
  const uploadedFilePath: string = path.join(config.uploadPath, fileName);
  res.sendFile(uploadedFilePath);
});

export default uploadsRouter;

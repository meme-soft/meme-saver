import fs from 'fs';
import mongoose from 'mongoose';
import config from './config';
import logger from './logger';

const dbConnect = () => {
  mongoose.connect('mongodb://localhost/memes', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const db: mongoose.Connection = mongoose.connection;
  db.once('open', () => {
    logger.info('connected successfully to mongodb');
  });
};

const makeUploadDir = () => {
  const { uploadPath } = config;
  if (!fs.existsSync(uploadPath)) {
    fs.mkdirSync(uploadPath, { recursive: true });
  }
  logger.info(`images upload path: ${uploadPath}`);
};

const setup = (startAppCallback: Function) => {
  dbConnect();
  makeUploadDir();
  startAppCallback();
};

export default setup;

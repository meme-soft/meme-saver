import fs from 'fs';
import config from './config';

const setup = (startAppCallback: Function) => {
  fs.mkdirSync(config.uploadPath);
  startAppCallback();
};

export default setup;

import config from '../config';

const makeUploadUrl = (filename: string): string => {
  const baseUrl: string = `${config.host}:${config.port}`;
  return `${baseUrl}/api/v1/meme/uploads/${filename}`;
};

export default {
  makeUploadUrl,
};

import path from 'path';

const port = process.env.PORT || 5000;
const host = process.env.HOST || 'http://localhost';

export default {
  uploadPath: path.join(__dirname, 'uploads'),
  port,
  host,
};

import express, {Request, Response} from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import morgan from 'morgan';

import memes from './memes';
import config from './config';
import uploadsRouter from './uploads';
import logger from './logger';

const app: express.Application = express()

mongoose.connect('mongodb://localhost/memes', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db: mongoose.Connection = mongoose.connection;
db.once('open', () => {
  logger.info('connected successfully to mongodb')
});

app.use(cors())
app.use(morgan('tiny')) // logging incoming request and response

app.use('/api/v1/meme/uploads', uploadsRouter)
app.use('/api/v1/meme/', memes)

app.get('/health', (req: Request, res: Response) => {
    res.send('alive')
})

app.listen(config.port, async () => {
  logger.info(`listening at http://localhost:${config.port}`)
})

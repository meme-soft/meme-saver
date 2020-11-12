import express, {Request, Response} from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import morgan from 'morgan';

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

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!')
})

app.listen(config.port, async () => {
  logger.info(`listening at http://localhost:${config.port}`)
})

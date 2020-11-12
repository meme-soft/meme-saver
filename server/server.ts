import express, {Request, Response} from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

import config from './config';
import  uploadsRouter from './uploads';

const app: express.Application = express()

mongoose.connect('mongodb://localhost/memes', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db: mongoose.Connection = mongoose.connection;
db.once('open', () => {
  console.log('connected successfully to mongodb')
});

app.use(cors())

app.use('/api/v1/meme/uploads', uploadsRouter)

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!')
})

app.listen(config.port, async () => {
  console.log(`listening at http://localhost:${config.port}`)
})

import express, {Request, Response} from 'express';
import meme from './db/meme';
import logger from './logger';

var oneMemeRouter = express.Router({ mergeParams: true })

oneMemeRouter.get('/', (req: Request, res: Response) => {
	const id: string = req.params.id;
	logger.info(id);
  meme.findById(id)
	.then(meme => {
		res.json(meme)
	})
	.catch(err => {
		res.json({
			message: err.message
		})
	})
})

export default oneMemeRouter
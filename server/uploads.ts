import path from 'path';
import express, {Request, Response} from 'express'
import fileUpload, {FileArray, UploadedFile} from 'express-fileupload';
import config from './config';

const uploadsRouter = express.Router()
uploadsRouter.use(fileUpload())

uploadsRouter.post('/', (req: Request, res: Response) => {
    const files: FileArray | undefined = req.files
    if (files === undefined) {
      res.status(400).json({ message: 'No file uploaded' })
    } else {
      const file: UploadedFile = files.file
      const uplaodFilePath: string = path.join(config.uploadPath, file.name)

      file.mv(uplaodFilePath, err => {
        if (err) {
          console.error(err)
          return res.status(500).send(err)
        }

        res.json({ message: "file uploaded" })
      })
    }
})

uploadsRouter.get('/:fileName', (req: Request, res: Response) => {
    const fileName: string = req.params.fileName
    const uploadedFilePath: string = path.join(config.uploadPath, fileName)
    res.sendFile(uploadedFilePath)
})

export default uploadsRouter

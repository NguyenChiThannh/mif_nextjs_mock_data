import { uploadFilesController } from '@/controllers/uploadFilesController'
import express, { Request, Response } from 'express'

const Router = express.Router()

Router.get('/health', (req: Request, res: Response) => {
  res.send('Hello world')
  return
})

Router.get(
  '/generate-presigned-url/upload',
  uploadFilesController.generatePresignedUrlForUpload,
)

Router.get('/uploaded-file-url', uploadFilesController.getUploadedFileUrl)

export const uploadFilesRoute = Router

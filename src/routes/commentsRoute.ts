import { commentsController } from '@/controllers/commentsController'
import express, { Request, Response } from 'express'

const Router = express.Router()

Router.get('/comment/health', (req: Request, res: Response) => {
  res.send('Hello world')
  return
})

Router.get('/post/:postId/comments', commentsController.getCommentsByPostId)

export const commentsRoute = Router

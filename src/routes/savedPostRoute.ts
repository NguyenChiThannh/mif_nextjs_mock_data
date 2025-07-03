import { savedMovieController } from '@/controllers/savedMovieController'
import { savedPostController } from '@/controllers/savedPostController'
import express, { Request, Response } from 'express'

const Router = express.Router()

Router.get('/health', (req: Request, res: Response) => {
  res.send('Hello world')
  return
})

Router.get('/', savedPostController.getSavedPosts)

Router.post('/:movieId', savedPostController.savePost)

Router.delete('/:movieId', savedPostController.unsavePost)

Router.post('/batch-check', savedPostController.batchCheckSavedStatus)

export const savedPostRoute = Router

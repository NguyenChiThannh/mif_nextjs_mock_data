import { savedMovieController } from '@/controllers/savedMovieController'
import express, { Request, Response } from 'express'

const Router = express.Router()

Router.get('/health', (req: Request, res: Response) => {
  res.send('Hello world')
  return
})

Router.get('/', savedMovieController.getSavedMovies)

Router.post('/:movieId', savedMovieController.saveMovie)

Router.delete('/:movieId', savedMovieController.unSaveMovie)

Router.post('/batch-check', savedMovieController.batchCheckSavedStatus)

export const savedMovieRoute = Router

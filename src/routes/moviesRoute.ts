import { moviesController } from '@/controllers/moviesController'
import express, { Request, Response } from 'express'

const Router = express.Router()

Router.get('/health', (req: Request, res: Response) => {
  res.send('Hello world')
  return
})

Router.get('/newest', moviesController.getNewestMovies)

Router.get('/random', moviesController.getRandomMovies)

Router.get('/', moviesController.getAllMovies)

Router.get('/search', moviesController.searchMoviesByTitle)

Router.get('/:id', moviesController.getMovieById)

Router.post('/', moviesController.createMovie)

Router.delete('/:id', moviesController.deleteMovie)

Router.put('/:id', moviesController.updateMovie)

Router.get('/:id/images', moviesController.getMovieImages)

Router.post('/:id/cast', moviesController.addCast)

Router.put('/:id/images', moviesController.updateMovieImages)

export const moviesRoute = Router

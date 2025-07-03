import { movieRatingsController } from '@/controllers/movieRatingsController'
import express, { Request, Response } from 'express'

const Router = express.Router()

Router.get('/health', (req: Request, res: Response) => {
  res.send('Hello world')
  return
})

Router.post('/movie-ratings', movieRatingsController.createRating)

Router.delete('/movie-ratings', movieRatingsController.removeRating)

Router.get(
  '/movies/:movieId/ratings',
  movieRatingsController.getAllRatingsByMovieId,
)

export const movieRatingsRoute = Router

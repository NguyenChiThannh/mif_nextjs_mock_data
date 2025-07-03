import { favoriteActorsController } from '@/controllers/favoriteActorsController'
import express, { Request, Response } from 'express'

const Router = express.Router()

Router.get('/health', (req: Request, res: Response) => {
  res.send('Hello world')
  return
})

Router.post('/:actorId', favoriteActorsController.addFavoriteActor)

Router.delete('/:actorId', favoriteActorsController.removeFavoriteActor)

Router.get('/:actorId', favoriteActorsController.isActorFavorite)

Router.get('/', favoriteActorsController.getFavoriteActors)

export const favoriteActorsRoute = Router

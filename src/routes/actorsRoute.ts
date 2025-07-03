import { actorsController } from '@/controllers/actorsController'
import express, { Request, Response } from 'express'

const Router = express.Router()

Router.get('/health', (req: Request, res: Response) => {
  res.send('Hello world')
  return
})

Router.get('/', actorsController.getAllActors)

Router.get('/search', actorsController.searchActorsByTitle)

Router.get('/:actorId', actorsController.getActorById)

Router.get('/:actorId/filmography', actorsController.getActorFilmography)

Router.post('/', actorsController.createActor)

Router.delete('/:actorId', actorsController.deleteActor)

export const actorsRoute = Router

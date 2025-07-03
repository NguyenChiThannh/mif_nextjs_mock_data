import { eventsController } from '@/controllers/eventsController'
import express, { Request, Response } from 'express'

const Router = express.Router()

Router.get('/events/health', (req: Request, res: Response) => {
  res.send('Hello world')
  return
})

Router.post('/events', eventsController.createEvent)

Router.delete('/events', eventsController.deleteEvent)

Router.post('/events/:eventId/subscribe', eventsController.subscribeToEvent)

Router.post(
  '/events/:eventId/unsubscribe',
  eventsController.unsubscribeFromEvent,
)

Router.get('/subscribed-events', eventsController.getSubscribedEvents)

Router.get('/groups/:groupId/events', eventsController.getEventsByGroupId)

export const eventsRoute = Router

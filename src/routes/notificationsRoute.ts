import { notificationsController } from '@/controllers/notificationsController'
import express, { Request, Response } from 'express'

const Router = express.Router()

Router.get('/health', (req: Request, res: Response) => {
  res.send('Hello world')
  return
})

Router.get('/', notificationsController.getAllNotifications)

Router.get('/unread-count', notificationsController.getUnreadNotificationCount)

Router.put('/:notificationId/read', notificationsController.markAsRead)

export const notificationsRoute = Router

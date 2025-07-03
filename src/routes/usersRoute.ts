import { usersController } from '@/controllers/usersController'
import express, { Request, Response } from 'express'

const Router = express.Router()

Router.get('/health', (req: Request, res: Response) => {
  res.send('Hello world')
  return
})

Router.get('/users/:id/posts', usersController.getProfilePostByUserId)

Router.get('/users/:id/info', usersController.getUserInfoById)

Router.patch('/my-profile', usersController.updateUserProfile)

Router.get('/users', usersController.getAllUsers)

Router.patch('/users/:id/role', usersController.changeUserRole)

Router.patch('/users/:id/status', usersController.setAccountStatus)

export const usersRoute = Router

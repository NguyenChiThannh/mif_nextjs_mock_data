import { chatController } from '@/controllers/chatController'
import express, { Request, Response } from 'express'

const Router = express.Router()

Router.get('/chat/health', (req: Request, res: Response) => {
  res.send('Hello world')
  return
})

Router.get('/group-chats', chatController.getGroupChats)

Router.get('/chat/group/:groupId/messages', chatController.getMessagesInGroup)

Router.post('/joined-group-chat', chatController.joinGroupChat)

export const chatRoute = Router

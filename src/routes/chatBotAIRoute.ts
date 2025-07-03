import { chatBotAIController } from '@/controllers/chatBotAIController'
import express, { Request, Response } from 'express'

const Router = express.Router()

Router.get('/health', (req: Request, res: Response) => {
  res.send('Hello world')
  return
})

Router.get('/history', chatBotAIController.getHistoryChatBot)

Router.post('/chat', chatBotAIController.chatWithBot)

Router.delete('/history', chatBotAIController.deleteHistoryChatBot)

export const chatBotAIRoute = Router

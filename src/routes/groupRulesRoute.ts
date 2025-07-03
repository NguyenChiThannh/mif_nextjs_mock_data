import { groupRulesController } from '@/controllers/groupRulesController'
import express, { Request, Response } from 'express'

const Router = express.Router()

Router.get('/health', (req: Request, res: Response) => {
  res.send('Hello world')
  return
})

Router.get('/groups/:groupId/rules', groupRulesController.getRulesByGroupId)

Router.post('/groups/:groupId/rules', groupRulesController.addRuleToGroup)

Router.delete(
  '/groups/:groupId/rules/:ruleId',
  groupRulesController.deleteRuleFromGroup,
)

Router.put(
  '/groups/:groupId/rules/:ruleId',
  groupRulesController.updateRuleInGroup,
)

export const groupRulesRoute = Router

import { groupsController } from '@/controllers/groupsController'
import express, { Request, Response } from 'express'

const Router = express.Router()

Router.get('/health', (req: Request, res: Response) => {
  res.send('Hello world')
  return
})

Router.post('/groups', groupsController.createGroup)

Router.patch('/groups/:groupId', groupsController.updateGroup)

Router.delete('/groups/:groupId', groupsController.deleteGroup)

Router.post(
  '/groups/:groupId/members/:userId',
  groupsController.addMemberToGroup,
)

Router.delete(
  '/groups/:groupId/members/:userId',
  groupsController.removeMemberFromGroup,
)

Router.get('/my-groups', groupsController.findByOwnerId)

Router.get('/user/:id/groups', groupsController.getUserGroups)

Router.get('/explore-groups', groupsController.findGroupUserNotJoin)

Router.post(
  '/groups/:groupId/pending-invitations',
  groupsController.addPendingInvitation,
)

Router.delete('/groups/:groupId/members', groupsController.leaveGroup)

Router.post(
  '/groups/:groupId/accept-invitations/:userId',
  groupsController.acceptInvitation,
)

Router.delete(
  '/groups/:groupId/pending-invitations/:userId',
  groupsController.removePendingInvitation,
)

Router.get('/groups/:groupId', groupsController.getGroupByGroupId)

Router.get('/groups/:groupId/members', groupsController.getAllMembers)

Router.get(
  '/groups/:groupId/pending-invitations',
  groupsController.getPendingInvitations,
)

Router.get('/groups/search', groupsController.searchGroupByGroupName)

Router.post('/groups/batch-status', groupsController.getUserStatusInGroups)

Router.get('/groups', groupsController.findAllGroupsAsPage)

Router.get(
  '/activity-analytics/top-active-users',
  groupsController.getTopActiveUsers,
)

export const groupsRoute = Router

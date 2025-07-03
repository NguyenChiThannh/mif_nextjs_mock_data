import { groupPostsController } from '@/controllers/groupPostsController'
import express, { Request, Response } from 'express'

const Router = express.Router()

Router.get('/health', (req: Request, res: Response) => {
  res.send('Hello world')
  return
})

Router.get('/groups/:groupId/posts', groupPostsController.getPostsByGroupId)

Router.post('/group-posts/:postId/upvote', groupPostsController.upvotePost)

Router.post('/group-posts/:postId/downvote', groupPostsController.downvotePost)

Router.delete('/group-posts/:postId/vote', groupPostsController.removevotePost)

Router.post('/group-posts', groupPostsController.createPost)

Router.get('/group-posts', groupPostsController.getAllPosts)

Router.get('/group-posts/:postId', groupPostsController.getPostById)

Router.delete('/group-posts/:postId', groupPostsController.deletePost)

Router.put('/group-posts/:postId', groupPostsController.editPost)

Router.post('/group-posts/:postId/report', groupPostsController.reportPost)

Router.get(
  '/group-posts/:postId/reports',
  groupPostsController.getReportsByGroupId,
)

Router.get(
  '/group-posts/reports/:postId/count',
  groupPostsController.getReportCounts,
)

Router.post(
  '/group-posts/:reportId/handle',
  groupPostsController.hanleReportPost,
)

Router.post('/group-posts/:reportId/unblock', groupPostsController.unBlockPost)

Router.get(
  '/group-posts/reports/:reportId/analyze',
  groupPostsController.analyzeReport,
)

Router.get(
  '/groups/:groupId/auto-moderation',
  groupPostsController.checkAutoModerationStatus,
)

Router.patch(
  '/groups/:groupId/auto-moderation',
  groupPostsController.toggleAutoModeration,
)

export const groupPostsRoute = Router

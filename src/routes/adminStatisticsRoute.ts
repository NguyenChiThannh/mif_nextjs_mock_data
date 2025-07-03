import { adminStatisticsController } from '@/controllers/adminStatisticsController'
import express, { Request, Response } from 'express'

const Router = express.Router()

Router.get('/admin-statistics/health', (req: Request, res: Response) => {
  res.send('Hello world')
  return
})

Router.get('/admin/statistics', adminStatisticsController.getStatistics)

Router.get(
  '/movies/sentiment-stats',
  adminStatisticsController.getStatisticsSentimentStats,
)

Router.get(
  '/users/statistics/monthly',
  adminStatisticsController.getUserStatisticsByYear,
)

Router.get(
  '/group-posts/statistics/monthly',
  adminStatisticsController.getPostStatisticsByYear,
)

Router.get(
  '/movie-ratings/statistics/monthly',
  adminStatisticsController.getRatingStatisticsByYear,
)

export const adminStatisticsRoute = Router

import { getRandomInt } from '@/utils/algorithm'
import { ResponseMessages } from '@/utils/messages'
import { successResponse } from '@/utils/responses'
import { Request, Response, NextFunction } from 'express'

const getStatistics = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const data = {
      totalUser: getRandomInt(20, 100),
      totalPost: getRandomInt(20, 100),
      totalGroup: getRandomInt(20, 100),
      totalMovie: getRandomInt(20, 100),
      totalRatingMovie: getRandomInt(20, 100),
      totalActor: getRandomInt(20, 100),
    }
    successResponse({
      message: ResponseMessages.SUCCESS,
      res,
      status: 200,
      data,
    })
    return
  } catch (error) {
    next(error)
  }
}

const getStatisticsSentimentStats = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const data = {
      totalComments: getRandomInt(50, 500),
      positivePercentage: 25,
      negativePercentage: 50,
      neutralPercentage: 25,
      mostPositiveMovie: 'The Godfather',
      mostPositivePercentage: 60,
      mostNegativeMovie: 'Minions',
      mostNegativePercentage: 66.66,
      lastUpdated: '11:15',
    }
    successResponse({
      message: ResponseMessages.SUCCESS,
      res,
      status: 200,
      data,
    })
    return
  } catch (error) {
    next(error)
  }
}

const getUserStatisticsByYear = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const data = {
      '1': getRandomInt(5, 50),
      '2': getRandomInt(5, 50),
      '3': getRandomInt(5, 50),
      '4': getRandomInt(5, 50),
      '5': getRandomInt(5, 50),
      '6': getRandomInt(5, 50),
      '7': getRandomInt(5, 50),
      '8': getRandomInt(5, 50),
      '9': getRandomInt(5, 50),
      '10': getRandomInt(5, 50),
      '11': getRandomInt(5, 50),
      '12': getRandomInt(5, 50),
    }
    successResponse({
      message: ResponseMessages.SUCCESS,
      res,
      status: 200,
      data,
    })
    return
  } catch (error) {
    next(error)
  }
}

const getPostStatisticsByYear = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const data = {
      '1': getRandomInt(5, 50),
      '2': getRandomInt(5, 50),
      '3': getRandomInt(5, 50),
      '4': getRandomInt(5, 50),
      '5': getRandomInt(5, 50),
      '6': getRandomInt(5, 50),
      '7': getRandomInt(5, 50),
      '8': getRandomInt(5, 50),
      '9': getRandomInt(5, 50),
      '10': getRandomInt(5, 50),
      '11': getRandomInt(5, 50),
      '12': getRandomInt(5, 50),
    }
    successResponse({
      message: ResponseMessages.SUCCESS,
      res,
      status: 200,
      data,
    })
    return
  } catch (error) {
    next(error)
  }
}

const getRatingStatisticsByYear = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const data = {
      '1': getRandomInt(5, 50),
      '2': getRandomInt(5, 50),
      '3': getRandomInt(5, 50),
      '4': getRandomInt(5, 50),
      '5': getRandomInt(5, 50),
      '6': getRandomInt(5, 50),
      '7': getRandomInt(5, 50),
      '8': getRandomInt(5, 50),
      '9': getRandomInt(5, 50),
      '10': getRandomInt(5, 50),
      '11': getRandomInt(5, 50),
      '12': getRandomInt(5, 50),
    }
    successResponse({
      message: ResponseMessages.SUCCESS,
      res,
      status: 200,
      data,
    })
    return
  } catch (error) {
    next(error)
  }
}

export const adminStatisticsController = {
  getStatistics,
  getStatisticsSentimentStats,
  getUserStatisticsByYear,
  getPostStatisticsByYear,
  getRatingStatisticsByYear,
}

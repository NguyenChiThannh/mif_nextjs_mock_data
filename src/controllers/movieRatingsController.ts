import { userRatings } from '@/data/rating-movie'
import { paginate } from '@/utils/algorithm'
import { ResponseMessages } from '@/utils/messages'
import { successResponse } from '@/utils/responses'
import { Request, Response, NextFunction } from 'express'

const createRating = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    successResponse({
      message: ResponseMessages.SUCCESS,
      res,
      status: 200,
    })
    return
  } catch (error) {
    next(error)
  }
}
const removeRating = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    successResponse({
      message: ResponseMessages.SUCCESS,
      res,
      status: 200,
    })
    return
  } catch (error) {
    next(error)
  }
}
const getAllRatingsByMovieId = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const data = paginate(userRatings, 0, 10)
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

export const movieRatingsController = {
  createRating,
  removeRating,
  getAllRatingsByMovieId,
}

import { Movie, movies } from '@/data/movie'
import { getRandomBoolean, paginate, shuffleArray } from '@/utils/algorithm'
import { ResponseMessages } from '@/utils/messages'
import { successResponse } from '@/utils/responses'
import { Request, Response, NextFunction } from 'express'

const saveMovie = async (req: Request, res: Response, next: NextFunction) => {
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

const getSavedMovies = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const data = paginate<Movie>(shuffleArray(movies).slice(0, 10), 0, 8)
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

const unSaveMovie = async (req: Request, res: Response, next: NextFunction) => {
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

const batchCheckSavedStatus = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { movieIds } = req.body
    const data: Record<string, string> = movieIds.reduce(
      (acc: Record<string, boolean>, id: string) => {
        acc[id] = getRandomBoolean()
        return acc
      },
      {},
    )
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

export const savedMovieController = {
  saveMovie,
  getSavedMovies,
  unSaveMovie,
  batchCheckSavedStatus,
}

import { Actor, actors } from '@/data/actor'
import { movies } from '@/data/movie'
import { getRandomInt, paginate, shuffleArray } from '@/utils/algorithm'
import { ResponseMessages } from '@/utils/messages'
import { successResponse } from '@/utils/responses'
import { Request, Response, NextFunction } from 'express'

const getAllActors = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const page = parseInt(req.query.page as string) || 0
    const data = paginate<Actor>(actors, page, 10)

    successResponse({
      message: ResponseMessages.SUCCESS,
      res,
      status: 200,
      data: data,
    })
    return
  } catch (error) {
    next(error)
  }
}

const getActorById = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const actorId = req.params.actorId
    let data = actors.find((actor) => actor.id === actorId)
    if (!data) {
      data = actors[getRandomInt(0, actors.length - 1)]
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

const getActorFilmography = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const data = shuffleArray(movies).slice(0, 4)
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

const createActor = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = actors[getRandomInt(0, actors.length - 1)]
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

const deleteActor = async (req: Request, res: Response, next: NextFunction) => {
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

const searchActorsByTitle = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const data = paginate<Actor>(actors, 0, 5)
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

export const actorsController = {
  getAllActors,
  getActorById,
  getActorFilmography,
  createActor,
  deleteActor,
  searchActorsByTitle,
}

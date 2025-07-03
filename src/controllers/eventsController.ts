import { EventMIF, events } from '@/data/event'
import { paginate, shuffleArray } from '@/utils/algorithm'
import { USERID } from '@/utils/contants'
import { ResponseMessages } from '@/utils/messages'
import { successResponse } from '@/utils/responses'
import { Request, Response, NextFunction } from 'express'

const createEvent = async (req: Request, res: Response, next: NextFunction) => {
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

const deleteEvent = async (req: Request, res: Response, next: NextFunction) => {
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

const subscribeToEvent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const eventId = req.params.eventId
    events.forEach((event) => {
      if (event.id === eventId) {
        if (!event.userJoin) {
          event.userJoin = []
        }
        if (!event.userJoin.includes(USERID)) {
          event.userJoin.push(USERID)
        }
      }
    })
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

const unsubscribeFromEvent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const eventId = req.params.eventId
    events.forEach((event) => {
      if (event.id === eventId) {
        if (!event.userJoin) {
          event.userJoin = []
        }
        if (!event.userJoin.includes(USERID)) {
          event.userJoin = event.userJoin.filter((id) => id !== USERID)
        }
      }
    })
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

const getSubscribedEvents = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const page = parseInt(req.query.page as string) || 0
    const data = paginate<EventMIF>(events, page, 10)
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

const getEventsByGroupId = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const page = parseInt(req.query.page as string) || 0
    const data = paginate(shuffleArray(events), page, 10)
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

export const eventsController = {
  createEvent,
  deleteEvent,
  subscribeToEvent,
  unsubscribeFromEvent,
  getSubscribedEvents,
  getEventsByGroupId,
}

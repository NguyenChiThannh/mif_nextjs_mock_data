import { INotification, notifications } from '@/data/notifications'
import { getRandomInt, paginate } from '@/utils/algorithm'
import { ResponseMessages } from '@/utils/messages'
import { successResponse } from '@/utils/responses'
import { Request, Response, NextFunction } from 'express'

const getAllNotifications = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const data = paginate<INotification>(notifications, 0, 40)
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

const markAsRead = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const notificationId = req.params.notificationId
    notifications.map((notification) => {
      if (notification.notifyId === notificationId) {
        notification.isRead = true
      }
      return notification
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

const getUnreadNotificationCount = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    successResponse({
      message: ResponseMessages.SUCCESS,
      res,
      status: 200,
      data: getRandomInt(0, 100),
    })
    return
  } catch (error) {
    next(error)
  }
}

export const notificationsController = {
  getAllNotifications,
  markAsRead,
  getUnreadNotificationCount,
}

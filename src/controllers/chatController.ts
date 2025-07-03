import { chatContent, groupChat } from '@/data/chat'
import { paginate } from '@/utils/algorithm'
import { ResponseMessages } from '@/utils/messages'
import { successResponse } from '@/utils/responses'
import { Request, Response, NextFunction } from 'express'

const getGroupChats = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const data = paginate(groupChat)
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

const getMessagesInGroup = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const data = paginate(chatContent, 0, 10)
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

const joinGroupChat = async (
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

export const chatController = {
  getGroupChats,
  getMessagesInGroup,
  joinGroupChat,
}

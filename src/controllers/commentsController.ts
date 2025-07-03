import { Comment, comments } from '@/data/comment'
import { paginate } from '@/utils/algorithm'
import { ResponseMessages } from '@/utils/messages'
import { successResponse } from '@/utils/responses'
import { Request, Response, NextFunction } from 'express'

const getCommentsByPostId = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const data = paginate<Comment>(comments, 0, 10)
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

const voteComment = async (req: Request, res: Response, next: NextFunction) => {
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

export const commentsController = {
  getCommentsByPostId,
  voteComment,
}

import { groupPost, GroupPost } from '@/data/group-post'
import { getRandomBoolean, paginate, shuffleArray } from '@/utils/algorithm'
import { ResponseMessages } from '@/utils/messages'
import { successResponse } from '@/utils/responses'
import { Request, Response, NextFunction } from 'express'

const getSavedPosts = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const data = paginate<GroupPost>(shuffleArray(groupPost).slice(0, 5), 0, 10)
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

const savePost = async (req: Request, res: Response, next: NextFunction) => {
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

const unsavePost = async (req: Request, res: Response, next: NextFunction) => {
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
    const { postIds } = req.body
    const data: Record<string, string> = postIds.reduce(
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

export const savedPostController = {
  getSavedPosts,
  savePost,
  unsavePost,
  batchCheckSavedStatus,
}

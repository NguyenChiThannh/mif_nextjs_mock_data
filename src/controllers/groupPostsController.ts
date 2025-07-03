import { groupPost } from '@/data/group-post'
import { groupPostReports } from '@/data/report-post'
import { getRandomBoolean, getRandomInt, paginate } from '@/utils/algorithm'
import { ResponseMessages } from '@/utils/messages'
import { successResponse } from '@/utils/responses'
import { Request, Response, NextFunction } from 'express'

let AUTO_MODERATION_STATUS = false

const getPostsByGroupId = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const page = Number(req.query.page) || 0
    const data = paginate(groupPost, page, 10)
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

const upvotePost = async (req: Request, res: Response, next: NextFunction) => {
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

const downvotePost = async (
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

const removevotePost = async (
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

const createPost = async (req: Request, res: Response, next: NextFunction) => {
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

const getAllPosts = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const page = Number(req.query.page) || 0
    const data = paginate(groupPost, page, 10)
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

const getPostById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    let data = groupPost.find((post) => post.id === req.params.postId)
    if (!data) {
      data = groupPost[getRandomInt(0, groupPost.length - 1)]
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

const deletePost = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const postIndex = groupPost.findIndex(
      (post) => post.id === req.params.postId,
    )
    groupPost.splice(postIndex, 1)

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

const editPost = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = groupPost[getRandomInt(0, groupPost.length - 1)]
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

const reportPost = async (req: Request, res: Response, next: NextFunction) => {
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

const getReportsByGroupId = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const page = Number(req.query.page) || 0
    const data = paginate(
      groupPostReports.map((report) => (report.status = 'PENDING')),
      page,
      10,
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

const getReportCounts = async (
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

const unBlockPost = async (req: Request, res: Response, next: NextFunction) => {
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

const analyzeReport = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const data = analyzeReport
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

const hanleReportPost = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const status = req.params.status
    if (status == 'BLOCK') {
      // handle block post logic
    } else if (status == 'REJECT') {
      // handle reject post logic
    }
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

const checkAutoModerationStatus = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    successResponse({
      message: ResponseMessages.SUCCESS,
      res,
      status: 200,
      data: AUTO_MODERATION_STATUS,
    })
    return
  } catch (error) {
    next(error)
  }
}

const toggleAutoModeration = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    AUTO_MODERATION_STATUS = !AUTO_MODERATION_STATUS
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

export const groupPostsController = {
  getPostsByGroupId,
  upvotePost,
  downvotePost,
  removevotePost,
  createPost,
  getAllPosts,
  getPostById,
  deletePost,
  editPost,
  reportPost,
  getReportsByGroupId,
  getReportCounts,
  hanleReportPost,
  unBlockPost,
  analyzeReport,
  checkAutoModerationStatus,
  toggleAutoModeration,
}

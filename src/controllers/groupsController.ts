import {
  Group,
  groups,
  groupStatus,
  joinedGroups,
  ownerGroups,
  suggestedGroups,
} from '@/data/group'
import { GroupMember, groupMembers } from '@/data/member'
import { getRandomInt, paginate } from '@/utils/algorithm'
import { ResponseMessages } from '@/utils/messages'
import { successResponse } from '@/utils/responses'
import { Request, Response, NextFunction } from 'express'

const createGroup = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = groups[getRandomInt(0, groups.length - 1)]
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

const updateGroup = async (req: Request, res: Response, next: NextFunction) => {
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

const deleteGroup = async (req: Request, res: Response, next: NextFunction) => {
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

const addMemberToGroup = async (
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

const removeMemberFromGroup = async (
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

const findByOwnerId = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const page = Number(req.query.page) || 0
    const data = paginate<Group>(ownerGroups, page, 10)
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

const getUserGroups = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const page = Number(req.query.page) || 0
    const data = paginate<Group>(joinedGroups, page, 10)
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

const findGroupUserNotJoin = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const page = Number(req.query.page) || 0
    const data = paginate<Group>(suggestedGroups, page, 10)
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

const addPendingInvitation = async (
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

const leaveGroup = async (req: Request, res: Response, next: NextFunction) => {
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

const acceptInvitation = async (
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

const getGroupByGroupId = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    let data = groups.find((group) => group.id === req.params.groupId)
    if (!data) {
      data = groups[0]
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

const getAllMembers = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const data = paginate<GroupMember>(groupMembers.slice(0, 20), 0, 5)
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

const getPendingInvitations = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const data = paginate<GroupMember>(groupMembers.slice(25, 30), 0, 5)
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

const removePendingInvitation = async (
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

const searchGroupByGroupName = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const page = Number(req.query.page) || 0
    const data = paginate(groups, page, 5)
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

const getUserStatusInGroups = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const groupIds = req.body.groupIds as string[]
    const data = groupIds.reduce((acc, groupId) => {
      acc[groupId] = groupStatus[groupId] ?? 'UNKNOWN'
      return acc
    }, {} as Record<string, string>)
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

const findAllGroupsAsPage = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const page = Number(req.query.page) || 0
    const data = paginate(groups, page, 10)
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

const getTopActiveUsers = async (
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
export const groupsController = {
  createGroup,
  updateGroup,
  deleteGroup,
  addMemberToGroup,
  removeMemberFromGroup,
  findByOwnerId,
  getUserGroups,
  findGroupUserNotJoin,
  addPendingInvitation,
  leaveGroup,
  acceptInvitation,
  getGroupByGroupId,
  getAllMembers,
  getPendingInvitations,
  removePendingInvitation,
  searchGroupByGroupName,
  getUserStatusInGroups,
  findAllGroupsAsPage,
  getTopActiveUsers,
}

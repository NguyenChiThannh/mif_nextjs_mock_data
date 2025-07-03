import { groupRules } from '@/data/group-rule'
import { ResponseMessages } from '@/utils/messages'
import { successResponse } from '@/utils/responses'
import { Request, Response, NextFunction } from 'express'
import mongoose from 'mongoose'

const getRulesByGroupId = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const data = groupRules
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

const addRuleToGroup = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { ruleDescription } = req.body
    const objectId = new mongoose.Types.ObjectId()
    const newRule = {
      id: objectId.toString(),
      ruleDescription,
    }
    groupRules.push(newRule)

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

const deleteRuleFromGroup = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const ruleId = req.params.ruleId
    const uniqueGroupRules = groupRules.filter((rule) => rule.id !== ruleId)

    groupRules.length = 0
    groupRules.push(...uniqueGroupRules)

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

const updateRuleInGroup = async (
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

export const groupRulesController = {
  getRulesByGroupId,
  addRuleToGroup,
  deleteRuleFromGroup,
  updateRuleInGroup,
}

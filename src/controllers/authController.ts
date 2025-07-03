import { genarateAccessToken } from '@/configs/token'
import { ResponseMessages } from '@/utils/messages'
import { successResponse } from '@/utils/responses'
import { Request, Response, NextFunction } from 'express'

const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = [
      {
        id: '66c2dfb8ef14de7f0da2d4e0',
        name: 'Thanh Nguyen',
        email: 'testuser@gmail.com',
        role: 'CONTENT_CREATOR',
      },
      {
        id: '00000000000000000user000',
        name: 'Quan Tri Vien',
        email: 'admin@gmail.com',
        role: 'ADMIN',
      },
      {
        id: '674190e37ce01e203e8f7646',
        name: 'Sam Smith',
        email: 'testuser@gmail.com',
        role: 'USER',
      },
    ]

    const email = req.body.email
    let userFound = user.find((u) => u.email === email)
    if (!userFound) {
      userFound = user[1] // Default to admin if email not found
    }
    const data = {
      access_token: genarateAccessToken(userFound),
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

const logout = async (req: Request, res: Response, next: NextFunction) => {
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

const loginWithGoogle = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const user = {
      id: '00000000000000000user000',
      name: 'Quan Tri Vien',
      email: 'admin@gmail.com',
      role: 'ADMIN',
    }
    const data = {
      access_token: genarateAccessToken(user),
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

const register = async (req: Request, res: Response, next: NextFunction) => {
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

const verifyOTP = async (req: Request, res: Response, next: NextFunction) => {
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

const newPassword = async (req: Request, res: Response, next: NextFunction) => {
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

export const authController = {
  login,
  logout,
  loginWithGoogle,
  register,
  verifyOTP,
  newPassword,
}

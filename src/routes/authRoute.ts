import { authController } from '@/controllers/authController'
import express, { Request, Response } from 'express'

const Router = express.Router()

Router.get('/health', (req: Request, res: Response) => {
    res.send('Hello world')
    return
})

Router.post('/login', authController.login)

Router.post('/logout', authController.logout)

Router.post('/google-login', authController.loginWithGoogle)

Router.post('/register', authController.register)

Router.post('/register/OTP', authController.verifyOTP)

Router.post('/reset-password/OTP/verify', authController.verifyOTP)

Router.post('/reset-password', authController.newPassword)

export const authRoute = Router
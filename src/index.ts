import express from 'express'
import cors from 'cors'
import { corsOptions } from './configs/cors'
import { APIs_V1 } from './routes'
import cookieParser from 'cookie-parser'
import 'dotenv/config'

const app = express()

const START_SEVER = async () => {
  // Cors
  app.use(cors(corsOptions))

  // Config cookie
  app.use(cookieParser())

  //Enable req.body json data
  app.use(express.json())

  // use APIs V1
  app.use('/v1', APIs_V1)

  app.listen(
    Number(process.env.APP_PORT) || 8000,
    process.env.APP_HOST || 'localhost',
    () => {
      console.log(
        `3.Server running at PORT ${process.env.APP_HOST}:${process.env.APP_PORT}`,
      )
    },
  )
}

;(async () => {
  try {
    await START_SEVER()
  } catch (error) {
    console.error(error)
  }
})()

import { actorsRoute } from '@/routes/actorsRoute'
import { adminStatisticsRoute } from '@/routes/adminStatisticsRoute'
import { authRoute } from '@/routes/authRoute'
import { chatBotAIRoute } from '@/routes/chatBotAIRoute'
import { chatRoute } from '@/routes/chatRoute'
import { commentsRoute } from '@/routes/commentsRoute'
import { eventsRoute } from '@/routes/eventsRoute'
import { favoriteActorsRoute } from '@/routes/favoriteActorsRoute'
import { groupPostsRoute } from '@/routes/groupPostsRoute'
import { groupsRoute } from '@/routes/groupsRoute'
import { groupRulesRoute } from '@/routes/groupRulesRoute'
import express from 'express'
import { moviesRoute } from '@/routes/moviesRoute'
import { movieRatingsRoute } from '@/routes/movieRatingsRoute'
import { notificationsRoute } from '@/routes/notificationsRoute'
import { savedMovieRoute } from '@/routes/savedMovieRoute'
import { savedPostRoute } from '@/routes/savedPostRoute'
import { uploadFilesRoute } from '@/routes/uploadFilesRoute'
import { usersRoute } from '@/routes/usersRoute'
import { movieCategoriesRoute } from '@/routes/movieCategoriesRoute'

const Router = express.Router()

// Auth api
Router.use('/auth', authRoute)

// Actors api
Router.use('/actors', actorsRoute)

// Admin Statistics api
Router.use('/', adminStatisticsRoute)

// Chat api
Router.use('/', chatRoute)

// Chat bot AI api
Router.use('/ai', chatBotAIRoute)

// Comments api
Router.use('/', commentsRoute)

// Events api
Router.use('/', eventsRoute)

// FavoriteActors api
Router.use('/favoriteActors', favoriteActorsRoute)

// Group Posts api
Router.use('/', groupPostsRoute)

// Group Rules api
Router.use('/', groupRulesRoute)

// Group api
Router.use('/', groupsRoute)

// Movies api
Router.use('/movies', moviesRoute)

// Movie Categories api
Router.use('/movies-category', movieCategoriesRoute)

// Movie Ratings api
Router.use('/', movieRatingsRoute)

// Notifications api
Router.use('/notifications', notificationsRoute)

// Saved Movies api
Router.use('/saved-movies', savedMovieRoute)

// Saved Posts api
Router.use('/saved-posts', savedPostRoute)

// Upload Files api
Router.use('/files', uploadFilesRoute)

// Users api
Router.use('/', usersRoute)

export const APIs_V1 = Router

import { movieCategoriesController } from '@/controllers/movieCategoriesController'
import express, { Request, Response } from 'express'

const Router = express.Router()

Router.get('/health', (req: Request, res: Response) => {
  res.send('Hello world')
  return
})

Router.get('/', movieCategoriesController.getAllmovieCategories)

Router.post('/', movieCategoriesController.createCategory)

Router.delete('/:id', movieCategoriesController.deleteCategory)

Router.put('/:id', movieCategoriesController.updateCategory)

Router.get('/:id', movieCategoriesController.getCategoryById)

export const movieCategoriesRoute = Router

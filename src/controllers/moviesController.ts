import { Movie, movies } from '@/data/movie'
import { getRandomInt, paginate, shuffleArray } from '@/utils/algorithm'
import { ResponseMessages } from '@/utils/messages'
import { successResponse } from '@/utils/responses'
import { Request, Response, NextFunction } from 'express'

const getNewestMovies = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const data = paginate(movies, 0, 10)
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

const getRandomMovies = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const data = shuffleArray(movies).slice(0, 4)
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

const getAllMovies = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const page = parseInt(req.query.page as string) || 0
    const data = paginate(movies, page, 10)
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

const searchMoviesByTitle = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const data = paginate(movies.slice(0, 10), 0, 4)
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

const getMovieById = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    let data: Movie = movies.filter((movie) => movie.id === req.params.id)[0]
    if (!data) {
      data = movies[0]
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

const createMovie = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = movies[getRandomInt(0, movies.length - 1)]
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

const getAllMoviesTable = async (
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

const deleteMovie = async (req: Request, res: Response, next: NextFunction) => {
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

const updateMovie = async (req: Request, res: Response, next: NextFunction) => {
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

const getMovieImages = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const data = [
      'https://image.tmdb.org/t/p/original/l8HyObVj8fPrzacAPtGWWLDhcfh.jpg',
      'https://image.tmdb.org/t/p/original/th4E1yqsE8DGpAseLiUrI60Hf8V.jpg',
    ]
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

const addCast = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = [
      {
        id: '66e322186443a3345e65c6b9',
        name: 'Cole Hauser The',
        dateOfBirth: '1980-01-01T00:00:00.000+00:00',
        bio: 'An accomplished actor known for various roles.',
        awards: [
          {
            name: 'Best Actor',
            date: '2020-01-01T00:00:00.000+00:00',
          },
          {
            name: 'Best Supporting Actor',
            date: '2018-01-01T00:00:00.000+00:00',
          },
        ],
        profilePictureUrl:
          'https://image.tmdb.org/t/p/original/th4E1yqsE8DGpAseLiUrI60Hf8V.jpg',
        createdAt: '2024-09-12T17:17:12.724+00:00',
        updatedAt: '2025-06-10T14:14:12.264+00:00',
        scoreRank: 4.48,
        previousScoreRank: 4.48,
        favoriteCount: 3,
      },
      {
        id: '66e3221b6443a3345e65c6ba',
        name: 'Gemma Chan',
        dateOfBirth: '1980-01-01T00:00:00.000+00:00',
        bio: 'An accomplished actor known for various roles.',
        awards: [
          {
            name: 'Best Actor',
            date: '2020-01-01T00:00:00.000+00:00',
          },
          {
            name: 'Best Supporting Actor',
            date: '2018-01-01T00:00:00.000+00:00',
          },
        ],
        profilePictureUrl:
          'https://image.tmdb.org/t/p/original/th4E1yqsE8DGpAseLiUrI60Hf8V.jpg',
        createdAt: '2024-09-12T17:17:15.588+00:00',
        updatedAt: '2025-06-28T01:47:23.369+00:00',
        scoreRank: 0.7,
        previousScoreRank: 0.7,
        favoriteCount: 3,
      },
      {
        id: '66e3221c6443a3345e65c6bb',
        name: 'Johnson',
        dateOfBirth: '1980-01-01T00:00:00.000+00:00',
        bio: 'An accomplished actor known for various roles.',
        awards: [
          {
            name: 'Best Actor',
            date: '2020-01-01T00:00:00.000+00:00',
          },
          {
            name: 'Best Supporting Actor',
            date: '2018-01-01T00:00:00.000+00:00',
          },
        ],
        profilePictureUrl:
          'https://image.tmdb.org/t/p/original/th4E1yqsE8DGpAseLiUrI60Hf8V.jpg',
        createdAt: '2024-09-12T17:17:16.589+00:00',
        updatedAt: '2025-06-06T14:34:04.867+00:00',
        scoreRank: 4.48,
        previousScoreRank: 4.48,
        favoriteCount: 2,
      },
    ]
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

const updateMovieImages = async (
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

export const moviesController = {
  getNewestMovies,
  getRandomMovies,
  getAllMovies,
  searchMoviesByTitle,
  getMovieById,
  createMovie,
  getAllMoviesTable,
  deleteMovie,
  updateMovie,
  getMovieImages,
  addCast,
  updateMovieImages,
}

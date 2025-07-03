import { PaginatedResponse } from '@/types/paginate.type'

export const getRandomInt = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export const getRandomBoolean = (): boolean => {
  return Math.random() < 0.5
}

export const getRandomFloat = (
  min: number,
  max: number,
  decimals = 1,
): number => {
  const factor = Math.pow(10, decimals)
  return Math.round((Math.random() * (max - min) + min) * factor) / factor
}

export function paginate<T>(
  data: T[],
  pageNumber: number = 0,
  pageSize: number = 10,
): PaginatedResponse<T> {
  const offset = pageNumber * pageSize
  const pagedData = data.slice(offset, offset + pageSize)

  const totalPages = Math.ceil(data.length / pageSize)

  const sortInfo = {
    empty: true,
    sorted: false,
    unsorted: true,
  }

  return {
    content: pagedData,
    pageable: {
      pageNumber,
      pageSize,
      sort: sortInfo,
      offset,
      paged: true,
      unpaged: false,
    },
    size: pageSize,
    number: pageNumber,
    sort: sortInfo,
    numberOfElements: pagedData.length,
    first: pageNumber === 0,
    last: pageNumber >= totalPages - 1,
    empty: pagedData.length === 0,
  }
}

export function shuffleArray<T>(array: T[]): T[] {
  const result = [...array]
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[result[i], result[j]] = [result[j], result[i]]
  }
  return result
}

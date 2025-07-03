export type PaginatedResponse<T> = {
  content: T[]
  pageable: Pageable
  size: number
  number: number
  sort: SortInfo
  numberOfElements: number
  first: boolean
  last: boolean
  empty: boolean
}

type SortInfo = {
  empty: boolean
  sorted: boolean
  unsorted: boolean
}

type Pageable = {
  pageNumber: number
  pageSize: number
  sort: SortInfo
  offset: number
  paged: boolean
  unpaged: boolean
}

export type Pagination<T> = {
  page: number
  perPage: number
  total: number
  totalPages: number
}

export interface PaginationParams {
  page?: number
  limit?: number
  sort_type?: SortType
  sort_by?: string
  search_key?: string
  tab?: string
}

export enum SortType {
  ASC = 'asc',
  DESC = 'desc',
}

export interface PaginationParams {
  page?: number
  limit?: number
  search_key?: string
}

export interface Pagination<T = any> {
  current_page: number
  data: T[]
  from: number
  last_page: number
  next_page_url: string | null
  path: string
  per_page: number
  prev_page_url: string | null
  to: number
  total: number
}

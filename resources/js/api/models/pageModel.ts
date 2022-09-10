import { Media } from './mediaModel'
export interface PageModel {
  id: number
  title: string
  content: string
  slug: string
  title_tag: string
  meta_tag: string
  is_active: boolean
  created_at: string
  updated_at: string
  created_by_name: string
  updated_by_name: string
  release_at: string | null
}

export interface CreatePageParams {
  id?: number | string
  title: string
  content: string
  slug?: string | null
  title_tag?: string | null
  meta_tag?: string | null
  release_at?: null | string
  is_active?: boolean
}

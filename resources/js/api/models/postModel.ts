import { Media } from './mediaModel'
export interface PostModel {
  id: number
  title: string
  content: string
  slug: string
  title_tag: string
  meta_tag: string
  is_active: boolean
  created_at: string
  summary: string
  updated_at: string
  media_id: number
  media: Media
  created_by_name: string
  updated_by_name: string
  release_at: null | string
  categories: any[]
}

export interface CreatePostParams {
  id?: number | string
  title: string
  content: string
  slug?: string | null
  title_tag?: string | null
  meta_tag?: string | null
  media_id?: number | null
  is_active?: boolean | null
  file?: null | File
  category_id?: (number | string)[]
  summary: string | null
}

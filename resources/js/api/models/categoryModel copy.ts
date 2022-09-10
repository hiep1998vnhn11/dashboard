import { Media } from './mediaModel'
export interface CreateCategoryParam {
  name: string
  description?: string
  slug?: string
  title_tag?: string
  meta_tag?: string
  is_active?: boolean
  file?: File
  media_id?: number
  id?: number | string
  link: number[]
  menu: number[]
}
export interface MenuOrLink {
  id: number
  menu_name?: string
  link_name?: string
  menu_id?: number
  link_id?: number
}
export interface CategoryModel extends Record<string, any> {
  id: number
  name: string
  description: string
  parent_id: number
  slug: string
  is_active: boolean
  created_at: string
  updated_at: string
  title_tag: string
  meta_tag: string
  media_id?: number
  media?: Media
  menu_or_link?: MenuOrLink[]
}

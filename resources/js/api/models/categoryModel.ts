import { ProductModel } from '/@/api/models/productModel'
import { Media } from './mediaModel'

export interface Condition {
  column: string
  relation: string
  condition: string
  id?: number
}
export interface CreateCategoryParam {
  name: string
  body_html?: string
  slug?: string
  title_tag?: string
  meta_tag?: string
  is_active?: boolean
  file?: File
  media_id?: number
  id?: number | string
  link: number[]
  menu: number[]
  is_smart?: boolean
  is_one_of_condition?: boolean
  conditions?: Condition[]
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
  image_url?: string
  is_smart?: number
  disjunctive?: number
  conditions?: Condition[]
  products?: ProductModel[]
  product_count?: number
  condition_text?: string[]
  sort_order: string
}
export interface PostCategoryModel extends Record<string, any> {
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
  comment_type: string
}
export interface CreatePostCategoryParam {
  name: string
  description?: string
  slug?: string
  title_tag?: string
  meta_tag?: string
  id?: number | string
  comment_type?: string | null
  link: number[]
  menu: number[]
}

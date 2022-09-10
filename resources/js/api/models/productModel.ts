import { Media } from './mediaModel'
export interface CreateProductParam {
  name: string
  description?: string
  content?: string
  slug?: string
  title_tag?: string
  meta_tag?: string
  is_active?: boolean
  id?: number | string
  tags?: string
  price?: number
  compare_price?: number
  delete_media_id?: number[]
  cost_per_item: number
  taxable: boolean
  is_track_quantity: boolean
  is_continue_selling: boolean
  requires_shipping: boolean
  is_has_options: boolean
  product_type: string
  vendor: string
  media_id?: number[]
  status: string
  sku?: string
  barcode?: string
}
export interface MenuOrLink {
  id: number
  menu_name?: string
  link_name?: string
  menu_id?: number
  link_id?: number
}
export interface ProductModel extends Record<string, any> {
  id: number | string
  name: string
  status: string
  description?: string
  content?: string
  slug: string
  is_active: boolean
  created_at: string
  updated_at?: string
  title_tag: string
  meta_tag?: string
  media?: Media[]
  tags?: string
}

export interface DuplicateProductParams {
  id: number | string
  name: string
  duplicate_image?: boolean
  is_active?: boolean
}

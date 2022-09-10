export interface Order {
  id: number
  customer_id: null | number
  note: null | string
  tags: null | string
  order_number: string
  status: string
  email: null | string
  processing_status: string
  cancel_reason: null | string
  cart_token: string | null
  current_total_discounts: number
  current_total_price: number
  current_total_tax: number
  total_discounts: number
  total_line_items_price: number
  total_price: number
  total_tax: number
  total_weight: number
  order_status_url: null | string
  closed_at: null | string
  canceled_at: null | string
  processed_at: null | string
}

export interface OrderLineItem {
  id: number
  order_id?: number
  product_id?: number
  variant_id?: number
  quantity: number
  price: number
  total_discount?: number
  requires_shipping?: boolean
  product_name: string
  image?: string | null
  product_weight?: number
  product_weight_unit?: string
}

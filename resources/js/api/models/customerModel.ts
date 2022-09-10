// Generated by https://quicktype.io

export interface Customer {
  id: number
  first_name: string | null
  last_name: string | null
  full_name: string
  email: string | null
  phone: string | null
  accepts_marketing: number | null
  accepts_marketing_updated_at: null | boolean
  last_login_at: null | string
  last_order_id: null | number
  last_order_name: null | string
  note: null | string
  order_count: number
  tags: null | string
  total_spent: string
  email_verified_at: null | string
  avatar: null | string
  address_id: number | null
  birthday: null | string
  gender: string
  company: null | string
  default_shipping_phone: null | string
  created_at: string | null
  updated_at: string | null
  default_address?: CustomerAddress
  addresses?: CustomerAddress[]
  disabled: number
  disabled_at: null | string
}
export interface CreateCustomerParams {
  id?: number | string
  first_name?: string
  last_name?: string
  email?: string
  phone?: string
  accepts_marketing?: number
  note?: null | string
  tags?: null | string
  avatar?: null | string
  birthday?: null | string
  gender?: string
  company?: null | string
  default_shipping_phone?: null | string

  address_first_name?: string
  address_last_name?: string
  address_phone?: string
  address?: string
  include_address?: boolean
}
export interface CustomerAddress {
  address1: null | string
  address2: null | string
  company: null | string
  country: null | string
  country_code: null | string
  customer_id: number
  district: null | string
  district_code: null | string
  first_name: 'Hiệp'
  id: number
  last_name: null | string
  phone: null | string
  province: null | string
  province_code: null | string
  ward: null | string
  ward_code: null | string
  zip: null | string
}

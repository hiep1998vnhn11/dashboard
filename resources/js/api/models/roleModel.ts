export interface AccountModel {
  created_at: string
  email: string
  id: number
  name: string
  phone: string | null
  roles: AccountRole[]
  updated_at: string
}

export interface AccountRole {
  id: number
  name: string
  guard_name: string
  created_at: string
  updated_at: string
}

export interface CreateAccountParams {
  id?: number
  name: string
  email: string
  phone?: string
}

export interface AccountModel {
  created_at: string
  email: string
  id: number
  name: string
  phone: string | null
  roles: AccountRole[]
  updated_at: string
  is_admin: number
}

export interface AccountRole {
  id: number
  name: string
  guard_name?: string
  created_at?: string
  updated_at?: string
  created_by_user?: string | null
  updated_by_user?: string | null
  display_name: string
  description: string | null
  is_system?: number
  is_admin?: number
}

export interface CreateAccountRoleParams {
  name: string
  display_name: string
  description?: string
  id?: number
  change_role: boolean
  is_admin: boolean
}

export interface CreateAccountParams {
  id?: number
  name: string
  email: string
  phone?: string
  roles?: string[]
  remove_roles?: string[]
}

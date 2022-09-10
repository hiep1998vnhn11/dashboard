import { defHttp } from '../utils/http'
import {
  CreateAccountParams,
  AccountRole,
  CreateAccountRoleParams,
} from './models/accountModel'
const indexApi = '/admin/role'
export const deleteRole = (id: number) =>
  defHttp.delete({
    url: indexApi + '/' + id,
  })

export const createRole = (params: CreateAccountRoleParams) =>
  defHttp.post({
    url: indexApi,
    data: params,
  })
export const getRole = (id: number) =>
  defHttp.get<AccountRole>({
    url: indexApi + '/' + id,
  })
export const getRoles = () =>
  defHttp.get({
    url: indexApi,
  })
export const updateRole = (id: number, params: CreateAccountRoleParams) =>
  defHttp.put({
    url: indexApi + '/' + id,
    data: params,
  })

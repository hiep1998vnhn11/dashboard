import { defHttp } from '../utils/http'
import { CreateAccountParams, AccountModel } from './models/accountModel'
const indexApi = '/admin/account'
export const deleteAccount = (id: number) =>
  defHttp.delete({
    url: indexApi + '/' + id,
  })

export const createAccount = (params: CreateAccountParams) =>
  defHttp.post({
    url: indexApi,
    data: params,
  })
export const getAccount = (id: number) =>
  defHttp.get<AccountModel>({
    url: indexApi + '/' + id,
  })
export const getAccounts = () =>
  defHttp.get({
    url: indexApi,
  })
export const updateAccount = (id: number, params: CreateAccountParams) =>
  defHttp.put({
    url: indexApi + '/' + id,
    data: params,
  })
export const pluckRoles = (search_key: string) =>
  defHttp.get<{ value: string; label: string }[]>({
    url: indexApi + '/pluck-roles',
    params: {
      search_key,
    },
  })

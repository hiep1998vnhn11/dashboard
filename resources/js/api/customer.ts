import { defHttp } from '/@/utils/http'
import { Customer, CreateCustomerParams } from './models/customerModel'
import { PaginationParams } from './models/paginationModel'
const indexApi = '/admin/customer'

export function getCustomers(params: PaginationParams) {
  return defHttp.get({
    url: indexApi,
    params,
  })
}
export function searchCustomers(params: PaginationParams) {
  return defHttp.get<Customer[]>({
    url: indexApi + '/search',
    params,
  })
}
export function getCustomer(id: number | string) {
  return defHttp.get<Customer>({
    url: `${indexApi}/${id}`,
  })
}

export const createCustomer = (params: CreateCustomerParams) =>
  defHttp.post<Customer>({
    url: indexApi,
    params,
  })
export const updateCustomer = (
  id: number | string,
  params: CreateCustomerParams
) =>
  defHttp.put<Customer>({
    url: indexApi + '/' + id,
    params,
  })

export const deleteCustomerList = (id: number[]) =>
  defHttp.post({
    url: indexApi + '/delete',
    params: { id },
  })
export const deleteCustomer = (id: number | string) =>
  defHttp.delete({
    url: indexApi + '/' + id,
  })

export const exportCustomer = (params: PaginationParams) =>
  defHttp.get({
    url: indexApi + '/export',
    params,
  })

export const disableCustomer = (data: {
  id: number | string
  disable?: number
}) =>
  defHttp.post({
    url: indexApi + '/disable',
    data,
  })
export const createCustomerAddress = (id: string | number, data: any) =>
  defHttp.post({ url: indexApi + '/' + id + '/address', data })
export const updateCustomerAddress = (id: number, data: any) =>
  defHttp.post({ url: indexApi + '/address/' + id, data })
export const makeDefaultAddress = (id: number, address_id: number) =>
  defHttp.post({
    url: indexApi + '/' + id + '/default-address',
    data: {
      id: address_id,
    },
  })

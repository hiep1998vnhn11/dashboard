import { defHttp } from '/@/utils/http'
import {
  CreateProductParam,
  ProductModel,
  DuplicateProductParams,
} from './models/productModel'
import { PaginationParams } from './models/paginationModel'
const indexApi = '/admin/product'

export function getProducts(params: PaginationParams) {
  return defHttp.get({
    url: indexApi,
    params,
  })
}
export function searchProducts(params: PaginationParams) {
  return defHttp.get<ProductModel[]>({
    url: indexApi + '/search',
    params,
  })
}
export function getProduct(id: number | string) {
  return defHttp.get<ProductModel>({
    url: `${indexApi}/${id}`,
  })
}

export const createProduct = (data: CreateProductParam) =>
  defHttp.post<ProductModel>({
    url: indexApi,
    data,
  })
export const updateProduct = (id: number | string, data: CreateProductParam) =>
  defHttp.put<ProductModel>({
    url: indexApi + '/' + id,
    data,
  })

export const deleteProductList = (id: number[]) =>
  defHttp.post({
    url: indexApi + '/delete',
    data: { id },
  })
export const confirmDeleteProductList = (id: number[]) =>
  defHttp.post({
    url: indexApi + '/confirm-delete',
    data: { id },
  })
export const deleteProduct = (id: number | string) =>
  defHttp.delete({
    url: indexApi + '/' + id,
  })

export const pluckCategory = (search_key: string) =>
  defHttp.get({
    url: indexApi + '/pluck',
    params: { search_key },
  })

export const getProductTags = (search_key: string) =>
  defHttp.get({
    url: indexApi + '/tags',
    params: { search_key, limit: 8 },
  })
export const duplicateProduct = (data: DuplicateProductParams) =>
  defHttp.post({ url: indexApi + '/duplicate', data })

import { ProductModel } from './models/productModel'
import { defHttp } from '/@/utils/http'
import { CreateCategoryParam, CategoryModel } from './models/categoryModel'
import { PaginationParams } from './models/paginationModel'

interface ProductSortOrderResponse {
  data: ProductModel[]
  count: number
}
const indexApi = '/admin/category'

export function getCategories(params: PaginationParams) {
  return defHttp.get({
    url: indexApi,
    params,
  })
}

export function getCategory(id: number | string) {
  return defHttp.get<CategoryModel>({
    url: `${indexApi}/${id}`,
  })
}

export const createCategory = (params: CreateCategoryParam) =>
  defHttp.post<CategoryModel>({
    url: indexApi,
    params,
  })
export const updateCategory = (
  id: number | string,
  params: CreateCategoryParam
) =>
  defHttp.put<CategoryModel>({
    url: indexApi + '/' + id,
    params,
  })

export const deleteCategoryList = (id: number[]) =>
  defHttp.post({
    url: indexApi + '/delete',
    params: { id },
  })

export const deleteCategory = (id: number) =>
  defHttp.delete({
    url: indexApi + '/' + id,
  })

export const pluckCategory = (search_key: string) =>
  defHttp.get({
    url: indexApi + '/pluck',
    params: { search_key },
  })

export const addProduct = (data: {
  collection_id: number
  product_ids: (number | string)[]
}) =>
  defHttp.post<ProductSortOrderResponse>({
    url: indexApi + '/addProduct',
    data,
  })
export const removeProduct = (data: {
  collection_id: number
  product_ids: (number | string)[]
}) =>
  defHttp.post<ProductSortOrderResponse>({
    url: indexApi + '/removeProduct',
    data,
  })

export const changeSortOrder = (data: { id: number; sort_order: string }) =>
  defHttp.post<ProductSortOrderResponse>({
    url: indexApi + '/changeSortOrder',
    data,
  })

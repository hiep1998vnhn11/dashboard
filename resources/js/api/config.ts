import { defHttp } from '/@/utils/http'
import { CreateCategoryParam, CategoryModel } from './models/categoryModel'
import { PaginationParams } from './models/paginationModel'
const indexApi = '/admin/config'
export interface ConfigModel {
  id: number
  value: string
  key: string
  description: null | string
  created_at: string
  updated_at: string | null
  updated_by_name: string
  created_by_name: string | null
}

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

export const createConfig = (params: {
  key: string
  value: string
  description?: string
}) =>
  defHttp.post<ConfigModel>({
    url: indexApi,
    params,
  })
export const updateConfig = (
  id: number | string,
  params: {
    key: string
    value: string
    description?: string
    id: number | string
  }
) =>
  defHttp.put<ConfigModel>({
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

import { defHttp } from '/@/utils/http'
import {
  CreatePostCategoryParam,
  PostCategoryModel,
} from './models/categoryModel'
import { PaginationParams } from './models/paginationModel'
const indexApi = '/admin/post/category'

export function getCategories(params: PaginationParams) {
  return defHttp.get({
    url: indexApi,
    params,
  })
}

export function getCategory(id: number | string) {
  return defHttp.get<PostCategoryModel>({
    url: `${indexApi}/${id}`,
  })
}

export const createCategory = (params: CreatePostCategoryParam) =>
  defHttp.post<PostCategoryModel>({
    url: indexApi,
    params,
  })
export const updateCategory = (
  id: number | string,
  params: CreatePostCategoryParam
) =>
  defHttp.put<PostCategoryModel>({
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
  defHttp.get<{ id: number; name: string }[]>({
    url: indexApi + '/pluck',
    params: { search_key },
  })

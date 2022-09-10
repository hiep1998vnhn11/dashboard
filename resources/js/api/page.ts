import { defHttp } from '/@/utils/http'
import { PageModel, CreatePageParams } from './models/pageModel'
import { PaginationParams } from './models/paginationModel'
const indexApi = '/admin/page'

export function getPages(params: PaginationParams) {
  return defHttp.get({
    url: indexApi,
    params,
  })
}

export function getPage(id: number | string) {
  return defHttp.get<PageModel>({
    url: `${indexApi}/${id}`,
  })
}

export const createPage = (params: CreatePageParams) =>
  defHttp.post<PageModel>({
    url: indexApi,
    params,
  })
export const updatePage = (id: number | string, params: CreatePageParams) =>
  defHttp.put<PageModel>({
    url: indexApi + '/' + id,
    params,
  })

export const deletePageList = (id: number[]) =>
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

export const duplicatePage = (id: number | string, name: string) =>
  defHttp.post({ url: indexApi + '/duplicate', params: { name, id } })

import { defHttp } from '/@/utils/http'
import { PostModel, CreatePostParams } from './models/postModel'
import { PaginationParams } from './models/paginationModel'
const indexApi = '/admin/post'

export function getPosts(params: PaginationParams) {
  return defHttp.get({
    url: indexApi,
    params,
  })
}

export function getPost(id: number | string) {
  return defHttp.get<PostModel>({
    url: `${indexApi}/${id}`,
  })
}

export const createPost = (params: CreatePostParams) =>
  defHttp.post<PostModel>({
    url: indexApi,
    params,
  })
export const updatePost = (id: number | string, params: CreatePostParams) =>
  defHttp.put<PostModel>({
    url: indexApi + '/' + id,
    params,
  })

export const deletePostList = (id: number[]) =>
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

export const duplicatePost = (id: number | string, name: string) =>
  defHttp.post({ url: indexApi + '/duplicate', params: { name, id } })

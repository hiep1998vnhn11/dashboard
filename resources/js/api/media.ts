import { defHttp } from '/@/utils/http'
import { Media, UpdateMediaParams } from './models/mediaModel'
import { PaginationParams, Pagination } from './models/baseModel'

const indexApi = '/admin/media'
interface GetListMediaParams extends PaginationParams {
  media_id?: number
}

export function getMedia(params: GetListMediaParams) {
  return defHttp.get<Pagination<Media>>({
    url: indexApi,
    params,
  })
}

export const deleteMedia = (id: number) =>
  defHttp.delete({ url: indexApi + '/' + id })

export const updateMedia = (id: number, params: UpdateMediaParams) =>
  defHttp.put({
    url: indexApi + '/' + id,
    params,
  })

export const resizeImage = (id: number, width: number) =>
  defHttp.post({ url: indexApi + '/' + id + '/resize', params: { width } })

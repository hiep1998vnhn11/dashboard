import { defHttp } from '/@/utils/http'
import { Media } from './models/mediaModel'

export function uploadApi(params: {
  file: any
  type?: number
  object_type?: string
  object_id?: number
  order?: number
}) {
  return defHttp.uploadFile(
    {
      url: '/admin/upload',
    },
    params
  )
}

export const uploadMedia = async (media: any) => {
  let uriMedia = media.path.replace('file://', '').replace('', 'file://')
  const type = media.mime.split('/')[0] === 'video' ? 2 : 1
  const file = {
    type: media.mime,
    name: media.name || 'file.' + media.mime.split('/')[1],
    uri: uriMedia,
  }
  const responseRaw = await uploadApi({ type, file })
  return responseRaw
}

export const uploadFileByUrl = (url: string) =>
  defHttp.post<Media>({ url: '/admin/upload-by-url', params: { url } })

export const importCustomer = (file: File, is_replace?: number) =>
  defHttp.uploadFile(
    {
      url: '/admin/customer/import',
    },
    {
      file,
      is_replace,
    }
  )

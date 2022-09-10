import { defHttp } from '/@//utils/http'
const indexApi = '/admin/menu'

export interface Menu {
  id?: number
  updated_by_name?: string
  links?: LinkI[]
  name: string
  alias: string
  listLinks?: string
  user?: {
    name: string
    id: number
  }
  expand?: boolean
}
export interface LinkI {
  id: number
  name: string
  type: string
  link: string
  menu_id?: number
  parent_id?: number
}
interface UpdateMenuLinkParams {
  name: string
  type: string
  link: string
}
interface CreateMenuLinkParams extends UpdateMenuLinkParams {
  menu_id: number | string
}
export const getMenu = () => defHttp.get<Menu[]>({ url: indexApi })
export const getMenuDetail = (id: string | number) =>
  defHttp.get<Menu>({ url: indexApi + '/' + id })

export const createMenuLink = (params: CreateMenuLinkParams) =>
  defHttp.post({ url: indexApi + '/link', params })
export const deleteMenuLink = (id: string | number) =>
  defHttp.delete({ url: indexApi + '/' + id })

export const updateMenuLink = (
  id: number | string,
  params: CreateMenuLinkParams
) => defHttp.put({ url: indexApi + '/' + id, params })
export const swapLink = (
  id: number | string,
  params: { source: number; destination: number }
) => defHttp.post({ url: indexApi + '/' + id + '/swap', params })
export const updateMenu = (params: any) =>
  defHttp.post({ url: indexApi, params })
export const createMenu = (params: any) =>
  defHttp.post({ url: indexApi + '/create', params })
export const getMenuForSelect = () =>
  defHttp.get<Menu[]>({ url: indexApi + '/getMenuForSelect' })

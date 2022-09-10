import { defHttp } from '../utils/http'

export const getSettingAndConfig = () =>
  defHttp.get({ url: '/config-and-setting' })

export const updateSetting = (settings: Record<string, string>) =>
  defHttp.post({
    url: '/admin/setting',
    params: {
      settings,
    },
  })

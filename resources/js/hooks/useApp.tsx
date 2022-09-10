import React, {
  createContext,
  ReactNode,
  useContext,
  useMemo,
  useState,
  useCallback,
  useRef,
  useEffect,
} from 'react'
import { getSettingAndConfig } from '/@/api/setting'
import { useLocation } from 'react-router-dom'
interface AppContextType {
  toastError: (error: string) => void
  toastSuccess: (message: string) => void
  loading: boolean
  toggleLoading: (loading?: any) => void
  settings: Record<string, string>
  configs: Record<string, string>
  setSettings: React.Dispatch<React.SetStateAction<Record<string, string>>>
  createConfirmModal: (options: CreateConfirmModalOption) => void
  createdFlag: React.MutableRefObject<boolean>
}

interface CreateConfirmModalOption {
  title: string
  content: string
  confirmText?: string
  cancelText?: string
  onConfirm?: () => void
  confirmDestructive?: boolean
}

const DEFAULT_OPTION = {
  title: '',
  content: '',
  confirmText: 'Đồng ý',
  cancelText: 'Đóng',
  onConfirm: undefined,
  confirmDestructive: false,
}

const AppContext = createContext<AppContextType>({} as AppContextType)

// Export the provider as we need to wrap the entire app with it
export function AppContextProvider({
  children,
}: {
  children: ReactNode
}): JSX.Element {
  const location = useLocation()
  const checkConfigAndSetting = useRef(false)
  const modalState = useRef<CreateConfirmModalOption>({
    title: 'test',
    content: 'test',
    confirmText: 'Đồng ý',
    cancelText: 'Đóng',
    onConfirm: () => {},
    confirmDestructive: false,
  })
  const message = useRef('')
  const createdFlag = useRef(false)
  const isToastError = useRef(false)
  const [activeToast, setActiveToast] = useState(false)
  const [loading, setLoading] = useState<boolean>(false)
  const [settings, setSettings] = useState<Record<string, string>>({})
  const [configs, setConfigs] = useState<Record<string, string>>({})
  const [modalActive, setModalActive] = useState(false)

  const toggleModalActive = useCallback(
    () => setModalActive((value) => !value),
    []
  )

  const createConfirmModal = useCallback(
    (options: CreateConfirmModalOption) => {
      const {
        title,
        content,
        confirmText,
        cancelText,
        onConfirm,
        confirmDestructive,
      } = {
        ...DEFAULT_OPTION,
        ...options,
      }
      modalState.current.title = title
      modalState.current.content = content
      modalState.current.onConfirm = onConfirm
      modalState.current.confirmText = confirmText
      modalState.current.cancelText = cancelText
      modalState.current.confirmDestructive = confirmDestructive
      toggleModalActive()
    },
    []
  )

  const handleModalConfirm = useCallback(() => {
    modalState.current.onConfirm?.()
    toggleModalActive()
  }, [])

  const toggleActive = useCallback(
    () => setActiveToast((active) => !active),
    []
  )
  const toggleLoading = useCallback((loading?: any) => {
    if (typeof loading === 'boolean') {
      setLoading(loading)
    } else {
      setLoading((loading) => !loading)
    }
  }, [])

  const toastMarkup = useMemo(() => {
    if (!activeToast) return null
    return null
  }, [activeToast])

  const toastError = useCallback((error: string) => {
    message.current = error
    isToastError.current = true
    toggleActive()
  }, [])

  const toastSuccess = useCallback((msg: string) => {
    message.current = msg
    isToastError.current = false
    toggleActive()
  }, [])

  const fetchSettingAndConfig = useCallback(async () => {
    try {
      setLoading(true)
      const res = await getSettingAndConfig()
      setSettings(res.settings)
      setConfigs(res.configs)
      checkConfigAndSetting.current = true
    } catch (err) {
      console.log(err)
    } finally {
      setLoading(false)
    }
  }, [])
  useEffect(() => {
    if (!checkConfigAndSetting.current) {
      fetchSettingAndConfig()
    }
  }, [location])

  const memoValue = useMemo(
    () => ({
      toastError,
      toastSuccess,
      toggleLoading,
      loading,
      configs,
      settings,
      setSettings,
      setConfigs,
      createConfirmModal,
      createdFlag,
    }),
    [loading, configs, settings]
  )

  const loadingMarkup = useMemo(() => {
    if (!loading) return null
    return null
  }, [loading])

  const modalMarkup = useMemo(() => {
    return null
  }, [modalActive])

  return (
    <AppContext.Provider value={memoValue}>
      {loadingMarkup}
      {children}
      {toastMarkup}
      {modalMarkup}
    </AppContext.Provider>
  )
}

export default function useApp() {
  return useContext(AppContext)
}

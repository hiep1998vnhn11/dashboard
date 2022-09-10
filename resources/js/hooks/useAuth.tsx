import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
  useCallback,
} from 'react'
import { useNavigate, useLocation, Navigate } from 'react-router-dom'
import type { User } from '/@/api/models/authModel'
import { loginApi, getUser } from '/@/api/auth'
import useApp from './useApp'
interface AuthContextType {
  token: string | null
  user: User | null
  error?: any
  login: (email: string, password: string) => void
  signUp: (email: string, name: string, password: string) => void
  logout: () => void
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType)

// Export the provider as we need to wrap the entire app with it
export function AuthProvider({
  children,
}: {
  children: ReactNode
}): JSX.Element {
  const navigate = useNavigate()
  const { toastError, toggleLoading } = useApp()
  const [user, setUser] = useState<User | null>(
    localStorage.getItem('user')
      ? JSON.parse(localStorage.getItem('user')!)
      : null
  )
  const [token, setToken] = useState(localStorage.getItem('access_token'))
  const [error, setError] = useState<any>()
  const [loadingInitial, setLoadingInitial] = useState<boolean>(true)
  const location = useLocation()

  useEffect(() => {
    if (error) setError(null)
  }, [location.pathname])

  const fetchUser = async () => {
    try {
      toggleLoading(true)
      const response = await getUser()
      setUser(response)
      localStorage.setItem('user', JSON.stringify(response))
    } catch (error) {
      setError(error)
    } finally {
      setLoadingInitial(false)
      toggleLoading(false)
    }
  }

  useEffect(() => {
    if (token && !user) {
      fetchUser()
    } else {
      setLoadingInitial(false)
    }
  }, [])

  const login = useCallback(async (email: string, password: string) => {
    try {
      toggleLoading(true)
      const { access_token, user } = await loginApi({
        email,
        password,
      })
      setUser(user)
      localStorage.setItem('access_token', access_token)
    } catch (err) {
      toastError('Sai tên đăng nhập hoặc mật khẩu!')
    } finally {
      toggleLoading(false)
    }
  }, [])

  function signUp(email: string, name: string, password: string) {
    toggleLoading(true)
  }

  const logout = useCallback(() => {
    localStorage.removeItem('access_token')
    localStorage.removeItem('user')
    setUser(null)
    setToken(null)
    navigate('/login')
  }, [])
  const memoedValue = useMemo(
    () => ({
      user,
      error,
      token,
      setToken,
      login,
      signUp,
      logout,
    }),
    [user, error, token]
  )

  return (
    <AuthContext.Provider value={memoedValue}>
      {!loadingInitial && children}
    </AuthContext.Provider>
  )
}

export default function useAuth() {
  return useContext(AuthContext)
}

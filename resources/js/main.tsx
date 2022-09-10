import { createRoot } from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from '/@/hooks/useAuth'
import { AppContextProvider } from '/@/hooks/useApp'
import './index.css'

declare global {
  interface Window {
    editor: any
    ClassicEditor: any
    CKEDITOR: any
  }

  const __APP_INFO__: {
    pkg: {
      name: string
      version: string
      dependencies: Recordable<string>
      devDependencies: Recordable<string>
    }
    lastBuildTime: string
  }

  export type Writable<T> = {
    -readonly [P in keyof T]: T[P]
  }

  type Nullable<T> = T | null
  type Recordable<T = any> = Record<string, T>

  namespace JSX {
    interface ElementAttributesProperty {
      $props: any
    }
    interface IntrinsicElements {
      [elem: string]: any
    }
    interface IntrinsicAttributes {
      [elem: string]: any
    }
  }
}

const container = document.getElementById('app')
const root = createRoot(container!)
root.render(
  <BrowserRouter>
    <AppContextProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </AppContextProvider>
  </BrowserRouter>
)

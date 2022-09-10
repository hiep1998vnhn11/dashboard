import { debounce } from 'lodash-es'
import { useEffect, useRef, useState, useCallback } from 'react'

type EditorOption = {
  debounceTime: number
  onLoaded: () => void
}
const INPUT_EVENT_DEBOUNCE_WAIT = 500

export default function useEditor(
  valueRef: any,
  defaultValue: string,
  dependencies: any[] = [],
  options: EditorOption = {
    debounceTime: INPUT_EVENT_DEBOUNCE_WAIT,
    onLoaded: () => {},
  }
) {
  const { debounceTime, onLoaded } = options
  const [data, setData] = useState(defaultValue)
  const setEditorData = useCallback((value: string) => {
    if (!editor.current) return
    setData(value)
    editor.current.setData(value)
  }, [])
  const editor = useRef<any>(null)

  useEffect(() => {
    if (valueRef.current) {
      setupEditor()
    }
    return () => {
      if (editor.current) {
        editor.current.destroy()
      }
    }
  }, [...dependencies, editor])

  const setupEditor = async () => {
    try {
      editor.current = (window as any).CKEDITOR.replace(valueRef.current)
      if (!editor.current) return
      editor.current.on('instanceReady', () => {
        editor.current.fire('lockSnapshot')
        editor.current.setData(valueRef.value, {
          callback: () => {
            $_setUpEditorEvents()
            const newData = editor.current.getData()
            if (data !== newData) {
              setData(newData)
            }
            editor.current.fire('unlockSnapshot')
            onLoaded()
          },
        })
      })
    } catch (err) {
      console.error(err)
    }
  }
  const emitDebouncedInputEvent = debounce(() => {
    const editorData = editor.current.getData()
    setData(editorData)
  }, debounceTime)

  function $_setUpEditorEvents() {
    editor.current.on('change', emitDebouncedInputEvent)
  }

  return {
    data,
    setData: setEditorData,
    setupEditor,
  }
}

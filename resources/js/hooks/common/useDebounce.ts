import { useEffect, useRef } from 'react'
import useTimeout from './useTimeout'

export function useDebounce(
  callback: () => void,
  delay: number,
  dependencies: any[],
  immediate = false
) {
  const { reset, clear } = useTimeout(callback, delay)

  useEffect(reset, [...dependencies, reset])

  useEffect(() => {
    clear()
    immediate && callback()
  }, [])
}

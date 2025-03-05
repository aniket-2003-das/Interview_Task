"use client"

import { useCallback, useRef } from "react"

export function useDebounce<T extends (...args: any[]) => any>(func: T, delay = 300): (...args: Parameters<T>) => void {
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  return useCallback(
    (...args: Parameters<T>) => {
      if (timerRef.current) {
        clearTimeout(timerRef.current)
      }

      timerRef.current = setTimeout(() => {
        func(...args)
      }, delay)
    },
    [func, delay],
  )
}


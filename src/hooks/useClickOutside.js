import { useEffect, useRef } from "react"

export const useClickOutside = (ref, handler, enabled = true) => {
  const savedHandler = useRef(handler)

  useEffect(() => {
    savedHandler.current = handler
  }, [handler])

  useEffect(() => {
    if (!enabled) return

    const listener = e => {
      const el = ref?.current
      if (!el || el.contains(e.target)) return
      savedHandler.current(e)
    }

    document.addEventListener('mousedown', listener)
    document.addEventListener('touchstart', listener)

    return () => {
      document.removeEventListener('mousedown', listener)
      document.removeEventListener('touchstart', listener)
    }
  }, [ref, enabled])
}

import React, { createContext, useContext, useEffect } from 'react'
import { fonts } from '@/config/fonts'
import { useLocalStorage } from 'usehooks-ts'

type Font = (typeof fonts)[number]

interface FontContextType {
  font: Font
  setFont: (font: Font) => void
}

const FontContext = createContext<FontContextType | undefined>(undefined)

export const FontProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [font, setFont] = useLocalStorage<Font>('font', fonts[0], {
    initializeWithValue: false,
  })

  useEffect(() => {
    if (typeof window === 'undefined') return
    const applyFont = (font: string) => {
      const root = document.documentElement
      root.classList.forEach((cls) => {
        if (cls.startsWith('font-')) root.classList.remove(cls)
      })
      root.classList.add(`font-${font}`)
    }

    applyFont(font)
  }, [font])

  return <FontContext value={{ font, setFont }}>{children}</FontContext>
}

// eslint-disable-next-line react-refresh/only-export-components
export const useFont = () => {
  const context = useContext(FontContext)
  if (!context) {
    throw new Error('useFont must be used within a FontProvider')
  }
  return context
}

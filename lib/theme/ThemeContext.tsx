'use client'
import {createContext, useContext, useState, useEffect} from 'react'

type Theme = 'green' | 'orange'
const ThemeContext = createContext({theme: 'green' as Theme, toggleTheme: () => {}})

export function ThemeProvider({children}: {children: React.ReactNode}) {
  const [theme, setTheme] = useState<Theme>('green')
  useEffect(() => {
    const stored = localStorage.getItem('heavensgate-theme') as Theme | null
    if (stored) setTheme(stored)
  }, [])
  const toggleTheme = () => {
    const newTheme = theme === 'green' ? 'orange' : 'green'
    setTheme(newTheme)
    localStorage.setItem('heavensgate-theme', newTheme)
  }
  return <ThemeContext.Provider value={{theme, toggleTheme}}>{children}</ThemeContext.Provider>
}
export const useTheme = () => useContext(ThemeContext)
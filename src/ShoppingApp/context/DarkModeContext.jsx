import React, { createContext, useContext, useEffect, useState } from 'react'

const DarkModeContext = createContext()

export default function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false)
  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    // setDarkMode(prev => !prev)
    updateDarkMode(!darkMode)
  }

  useEffect(() => {
    const isDark =
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    setDarkMode(isDark)
    updateDarkMode(isDark)
  }, [])
  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  )
}

function updateDarkMode(darkMode) {
  if (!darkMode) {
    document.documentElement.classList.remove('dark')
    localStorage.theme = 'light'
  } else {
    document.documentElement.classList.add('dark')
    localStorage.theme = 'dark'
  }
}

export const useDarkMode = () => useContext(DarkModeContext)

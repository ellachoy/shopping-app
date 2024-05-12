import React from 'react'
import { useDarkMode } from '../context/DarkModeContext'
import { HiMoon, HiSun } from 'react-icons/hi'

export default function Header({ filters, filter, onFilterChange }) {
  const { darkMode, toggleDarkMode } = useDarkMode(false)

  return (
    <header className='header'>
      <button onClick={toggleDarkMode} className='toggle'>
        {!darkMode && <HiMoon />}
        {darkMode && <HiSun />}
      </button>
      <ul className='filters'>
        {/* {filters.map((index, value) => (
          <li key={index}> output was number 
            <button onClick={() => onFilterChange(value)}>{value}</button>
          </li>
        ))} */}
        {filters.map(value => (
          <li key={value}>
            <button
              className={`${'filter'} ${filter === value ? 'selected' : null}`}
              onClick={() => onFilterChange(value)}
            >
              {value}
            </button>
          </li>
        ))}
      </ul>
    </header>
  )
}

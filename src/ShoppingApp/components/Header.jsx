import React from 'react'

export default function Header({ filters, filter, onFilterChange }) {
  return (
    <header className='header'>
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

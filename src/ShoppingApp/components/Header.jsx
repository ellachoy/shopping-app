import React from 'react'

export default function Header({ filters, filter, onFilterChange }) {
  return (
    <header>
      <ul>
        {/* {filters.map((index, value) => (
          <li key={index}> output was number 
            <button onClick={() => onFilterChange(value)}>{value}</button>
          </li>
        ))} */}
        {filters.map(value => (
          <li key={value}>
            <button onClick={() => onFilterChange(value)}>{value}</button>
          </li>
        ))}
      </ul>
    </header>
  )
}

import { useState } from 'react'
import Header from './components/Header'
import ShoppingList from './components/ShoppingList'
import DarkModeProvider from './context/DarkModeContext'

const filters = ['all', 'active', 'completed']
export default function ShoppingApp() {
  const [filter, setFilter] = useState(filters[0])
  console.log(filter)

  return (
    <DarkModeProvider>
      <Header
        filters={filters}
        filter={filter}
        //onFilterChange={filter => setFilter(filter)}
        onFilterChange={setFilter}
      />
      <ShoppingList filter={filter} />
    </DarkModeProvider>
  )
}

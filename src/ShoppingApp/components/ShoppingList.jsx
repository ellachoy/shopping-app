import React, { useEffect, useState } from 'react'
import AddForm from './AddForm'
import ShoppingItem from './Shoppingitem'

export default function ShoppingList({ filter }) {
  const [items, setItems] = useState(() => readTodosFromLocalStorage())
  const handleAdd = item => {
    setItems([...items, item])
  }
  const handleUpdate = updated =>
    setItems(items.map(items => (items.id === updated.id ? updated : items)))
  const handleDelete = deleted =>
    setItems(items.filter(items => items.id !== deleted.id))

  const filtered = getFilterItems(items, filter)

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items))
  }, [items])

  return (
    <section className='container'>
      <ul className='list'>
        {filtered.map(item => (
          <ShoppingItem
            key={item.id}
            item={item}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        ))}
      </ul>
      <AddForm onAdd={handleAdd} />
    </section>
  )
}

function readTodosFromLocalStorage() {
  console.log('readTodosFromLocalStorage')
  const items = localStorage.getItem('items')
  return items ? JSON.parse(items) : []
}

function getFilterItems(items, filter) {
  if (filter === 'all') {
    return items
  }
  return items.filter(item => item.status === filter)
}

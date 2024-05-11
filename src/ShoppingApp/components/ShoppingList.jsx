import React, { useState } from 'react'
import AddForm from './AddForm'
import ShoppingItem from './Shoppingitem'

const mockData = [
  { id: '1', text: 'Gurke', status: 'active' },
  { id: '2', text: 'Zucchini', status: 'active' },
  { id: '3', text: 'Erdbeer', status: 'active' },
]

export default function ShoppingList({ filter }) {
  const [items, setItems] = useState(mockData)
  const handleAdd = item => {
    setItems([...items, item])
  }

  const handleUpdate = updated =>
    setItems(items.map(items => (items.id === updated.id ? updated : items)))
  const handleDelete = deleted =>
    setItems(items.filter(items => items.id !== deleted.id))

  const filtered = getFilterItems(items, filter)

  return (
    <section>
      <ul>
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

function getFilterItems(items, filter) {
  if (filter === 'all') {
    return items
  }
  return items.filter(item => item.status === filter)
}

import React from 'react'
import { FaTrashAlt } from 'react-icons/fa'

export default function ShoppingItem({ item, onUpdate, onDelete }) {
  const { id, text, status } = item

  const handleChange = e => {
    const status = e.target.checked ? 'completed' : 'active'
    onUpdate({ ...item, status })
  }

  const handleDelete = () => onDelete(item)

  return (
    <li>
      <input
        type='checkbox'
        id={id}
        onChange={handleChange}
        checked={status === 'completed'}
      />
      <lable htmlFor={id}>{text}</lable>

      <span>
        <button onClick={handleDelete}>
          <FaTrashAlt />
        </button>
      </span>
    </li>
  )
}

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
    <li className='item'>
      <input
        className='checkbox'
        type='checkbox'
        id={id}
        onChange={handleChange}
        checked={status === 'completed'}
      />
      <lable htmlFor={id} className='text'>
        {text}
      </lable>

      <span className='icon'>
        <button onClick={handleDelete} className='button'>
          <FaTrashAlt />
        </button>
      </span>
    </li>
  )
}

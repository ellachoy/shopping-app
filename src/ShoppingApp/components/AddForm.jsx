import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

export default function AddForm({ onAdd }) {
  const [text, setText] = useState('')

  const handleChange = e => setText(e.target.value)
  const handleSubmit = e => {
    e.preventDefault()
    if (text.trim().length === 0) {
      return
    }
    onAdd({ id: uuidv4(), text, status: 'active' })
    setText('')
  }

  return (
    <form onSubmit={handleSubmit} className='form'>
      <input
        className='input'
        type='text'
        placeholder='Add item'
        value={text}
        onChange={handleChange}
      />
      <button type='submit' className='button'>
        Add
      </button>
    </form>
  )
}

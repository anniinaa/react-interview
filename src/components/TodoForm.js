import { Button } from '@mui/material'
import TextField from '@material-ui/core/TextField'
import React from 'react'

export const TodoForm = ({ input, setInput, todos, setTodos }) => {
  const onInputChange = (e) => {
    setInput(e.target.value)
  }

  const generateNewId = () => {
    return todos.length + 1
  }

  const onFormSubmit = (e) => {
    e.preventDefault()
    setTodos([...todos, { id: generateNewId(), title: input, complete: false }])
    setInput('')
  }

  return (
    <form onSubmit={onFormSubmit}>
      <TextField
        required
        type="text"
        placeholder="Enter todo..."
        id="input-form"
        value={input}
        onChange={onInputChange}
      />
      <Button id="add-button" type="submit">
        Add
      </Button>
    </form>
  )
}

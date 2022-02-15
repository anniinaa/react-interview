import React from 'react'
import ReactDOM from 'react-dom'
import { TodoForm } from '../TodoForm'

it('Form works without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<TodoForm></TodoForm>, div)
})

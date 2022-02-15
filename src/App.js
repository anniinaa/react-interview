import React, { useState } from 'react'
import './styles/App.css'
import { TodoForm } from './components/TodoForm'
import { TodoList } from './components/TodoList'
import { Header } from './components/Header'

const App = () => {
  const [input, setInput] = useState('')
  const [todos, setTodos] = useState([])

  return (
    <wrapper className="app-container">
      <Header />
      <div className="app-wrapper">
        <div className="form-wrapper">
          <TodoForm
            input={input}
            setInput={setInput}
            todos={todos}
            setTodos={setTodos}
          />
        </div>
        <div>
          <TodoList todos={todos} setTodos={setTodos} />
        </div>
      </div>
    </wrapper>
  )
}

export default App

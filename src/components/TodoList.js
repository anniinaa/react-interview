import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import Button from '@material-ui/core/Button'

export const TodoList = ({ todos, setTodos }) => {
  const onRemoveClick = ({ id }) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const handleComplete = (todo) => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, complete: !item.complete }
        }
        return item
      }),
    )
  }

  return (
    <div className="list-wrapper">
      {todos.map((todo) => (
        <li key={todo.id} className="list">
          <h4
            className="todo-title"
            className={`list${todo.comlete ? 'completed' : ''}`}
            onChange={(e) => e.preventDefault()}
          >
            {todo.title}
          </h4>
          <wrapper className="buttons-wrapper">
            <div className="button">
              <Button onClick={() => handleComplete(todo)}>
                {todo.complete ? (
                  <CheckCircleIcon className="completed" />
                ) : (
                  <CheckCircleIcon className="inProgress" />
                )}
              </Button>
            </div>
            <Button id="delete-button">
              <DeleteIcon onClick={() => onRemoveClick(todo)} />
            </Button>
          </wrapper>
        </li>
      ))}
    </div>
  )
}

import './index.css'

const TodoItem = props => {
  const {todoItemDetails, deleteTodo} = props
  const {id, title} = todoItemDetails

  const onDelete = () => {
    deleteTodo(id)
  }

  return (
    <li className="item-container">
      <p className="title">{title}</p>
      <button type="button" onClick={onDelete} className="button">
        Delete
      </button>
    </li>
  )
}

export default TodoItem

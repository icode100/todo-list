import React from 'react'

export const TodoItem = (props) => {
  return (
    <div>
        <h4>{props.todo.title}</h4>
        <p>{props.todo.des}</p>
        <button type="button" className="btn btn-sm btn-danger" onClick={()=>{props.onDelete(props.todo)}}>Delete</button>
    </div>
  )
}

import React from 'react'
import PropTypes from 'prop-types';
import {TodoItem} from "../Mycomponents/TodoItem";

export const Todos = (props) => {
  return (
    <div className='container'>
      <h3 className='text-center'>Todos List</h3>
      {props.todos.length==0?"No work to do😴":
        props.todos.map((todo)=>{
          return <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>
          
        })}
      
      
    </div>
  )
}
Todos.defaultProps={
    todos:[{sno:-1,title:'No work to do',des:null}]
}

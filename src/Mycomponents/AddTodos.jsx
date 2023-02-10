import React from 'react'
import {useState} from 'react';
export const AddTodos = (props) => {
    const [title,setTitle] = useState("");
    const [des,setDes] = useState("");
    const submit = (e)=>{
        e.preventDefault();
        props.addTodo(title,des);
    }
  return (
    <div className="input-group mb-3">
        <input type="text" className="form-control" value={title} onChange={(e)=>{setTitle(e.target.value)}} placeholder="enter the work" aria-label="Recipient's username" aria-describedby="button-addon2"/>
        <input type="text" className="form-control" value={des} onChange={(e)=>{setDes(e.target.value)}} placeholder="add description" aria-label="Recipient's username" aria-describedby="button-addon2"/>
        <button className="btn btn-success" type="submit" id="button-addon2" onClick={submit}>Add Todo</button>
    </div>
  )
}

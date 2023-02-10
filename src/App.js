import logo from './logo.svg';
// import './App.css';
import Header from "./Mycomponents/header";
import {Todos} from "./Mycomponents/Todos";
import {Footer} from "./Mycomponents/footer";
import {AddTodos} from "./Mycomponents/AddTodos"
import React,{useState} from 'react';
function App() {

  const onDelete=(todo)=>{
    setTodos(todos.filter(e => e!==todo))
  }

  const addTodo = (title,des)=>{
    
    let sno = todos.length==0?1:todos[todos.length-1].sno+1;
    const myTodo={
      sno:sno,
      title:title,
      des:des
    }
    console.log(myTodo)
    setTodos([...todos,myTodo])
  }

  const [todos,setTodos]=useState([{sno:1,title:"go to the market",des:"you need to go to the market to get this job done"},
  {sno:2,title:"go to the mall",des:"you need to go to the mall to get this job done"},
  {sno:3,title:"go to the ghat",des:"you need to go to the ghat to get this job done"}
              ])
  return (
    <>
      <Header title="My Todos list" searchBar={true}/>
      <AddTodos addTodo={addTodo}/>
      <Todos todos = {todos} onDelete = {onDelete}/>
      <Footer/>
      
    </>
  );
}

export default App;

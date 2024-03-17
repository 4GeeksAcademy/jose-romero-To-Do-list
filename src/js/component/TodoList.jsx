import React, { useEffect, useState } from 'react';
import TodoItem from './TodoItem';
import "../../styles/todo.css"

const TodoList = () => {
{/*este es el primer fetch  donde se pide la informacion necesaria para ingresara a la api y si no crearla */}
  const informacion =()=>{
    fetch(`https://playground.4geeks.com/apis/fake/todos/user/Diana024`,{
      method : "GET"
    })
    .then(devolverInfo => {
      console.log(devolverInfo.ok);
      console.log(devolverInfo.status);
      if( devolverInfo.status === 404){
        console.log("quieres crear un nuevo usuario")
        createUser()
      }
      return devolverInfo.json;
    })

    .then(data =>{
      console.log(data);
      setTodos(data)
    })
    .catch(function (error) {
      console.log("Hubo un problema con la petición Fetch:" + error);
    });
  }
{/* aqui va el methodo post para pedir la creacion del usuairo*/}

const crearUsuario = ()=>{
    fetch(`https://playground.4geeks.com/apis/fake/todos/user/Diana024`,{
      method:"POST",
      headers :{
        "content-type" : "application/Json "
      },
      body:JSON.stringify ([])
    })
    .then (crear => {
      console.log(crear.ok);
      console.log(crear.status);
      return crear.json
    })
    .then(data =>{
      console.log(data);
    })
    .catch(function (error) {
      console.log("Hubo un problema con la petición Fetch:" + error);
    });
}

{/* aqui va el methodo update*/}

const actualizar = () =>{
  fetch(`https://playground.4geeks.com/apis/fake/todos/user/Diana024`,{
    method: "PUT",
    body: [
           { label: "Make the bed", done: false },
           { label: "Walk the dog", done: false },
           { label: "Do the replits", done: false },
          ]
    })
  }
  
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, newTodo]);
      setNewTodo('');
    }
  };
  
  const removeTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

    useEffect(() => {
      informacion();
    })

    useEffect(() => {
      crearUsuario();
    })

    useEffect(() => {
      actualizar();
    },[todos])

  return (
    <div className='contenedor'>
      <h1 className='text'>Todo List</h1>
      <div className='container'>
        <input
          className="input mb-4"
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder='Tu tarea aqui'
          onKeyDown={(e) => console.log(e)}
        />
      
        <button className='btn' onClick={addTodo}>Agregar To-Do</button>
      
      </div>

        {todos.map((todo, index) => (
          <TodoItem key={index} index={index} todo={todo} removeTodo={removeTodo} />
        ))}

          <p className='cantItem'>{todos.length} Items Left</p>
      
       
    </div>
  );
};

export default TodoList;



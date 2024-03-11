import React, { useState } from 'react';
import TodoItem from './TodoItem';
import "../../styles/todo.css"

const TodoList = () => {

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



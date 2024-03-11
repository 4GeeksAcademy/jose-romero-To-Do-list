import React from 'react';
import "../../styles/todo.css"
import TodoList from './TodoList';


const TodoItem = ({ index, todo, removeTodo,  }) => {
  return (
    <>
      
        {todo}
       <button className="close" onClick={() => removeTodo(index)}>X</button>
        <hr/>
    </>
  );
};

export default TodoItem;
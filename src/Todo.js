import React from "react";

function Todo({todo , deleteTodo}) {
  return (
    <div className="todo">
      <label>{todo.title}</label>
      <button onClick={ () => deleteTodo(todo.id) } >Delete {todo.id} </button>
    </div>
  );
}

export default Todo;

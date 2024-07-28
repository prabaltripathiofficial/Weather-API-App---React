import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoList() {
  let [todos, settodos] = useState([]);
  let [newtodo, setnewtodo] = useState("");

  function add() {
    settodos([...todos, { task: newtodo, id: uuidv4(), isDone: false }]);
    setnewtodo("");
  }

  function addtodo(event) {
    setnewtodo(event.target.value);
  }

  function deleteItem(id) {
    let newTodo = todos.filter((todo) => todo.id !== id);
    settodos(newTodo);
  }

  function markDone(id) {
    let updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
    );
    settodos(updatedTodos);
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Enter the task"
        value={newtodo}
        onChange={addtodo}
      />
      <br />
      <br />
      <button onClick={add}>Add!!</button>
      <hr />
      <h1>Todo List</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span style={{ textDecoration: todo.isDone ? "line-through" : "none" }}>
              {todo.task}
            </span>
            &nbsp;&nbsp;&nbsp;
            <span>
              <button onClick={() => deleteItem(todo.id)}>Delete</button>
            </span>
            &nbsp;&nbsp;&nbsp;
            <span>
              <button onClick={() => markDone(todo.id)}>Mark Done!</button>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}




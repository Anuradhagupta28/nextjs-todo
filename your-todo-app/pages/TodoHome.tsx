// pages/index.tsx
import React, { useState } from 'react';
import TodoItem from '../components/TodoItem';

const TodoHome: React.FC = () => {
  const [todos, setTodos] = useState<string[]>([]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (newTodo) {
      setTodos([...todos, newTodo]);
      setNewTodo('');
    }
  };

  return (
    <div>
      <h1>My To-Do List</h1>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Enter a new task"
      />
      <button onClick={addTodo}>Add</button>
      <div>
        {todos.map((todo, index) => (
          <TodoItem key={index} text={todo} />
        ))}
      </div>
    </div>
  );
};

export default TodoHome;

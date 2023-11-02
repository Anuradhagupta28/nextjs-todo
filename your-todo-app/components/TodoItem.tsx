// components/TodoItem.tsx
import React, { useState } from 'react';

interface TodoItemProps {
  text: string;
}

const TodoItem: React.FC<TodoItemProps> = ({ text }) => {
  const [completed, setCompleted] = useState(false);

  const toggleCompleted = () => {
    setCompleted(!completed);
  };

  return (
    <div>
      <input type="checkbox" checked={completed} onChange={toggleCompleted} />
      <span style={{ textDecoration: completed ? 'line-through' : 'none' }}>{text}</span>
    </div>
  );
};

export default TodoItem;

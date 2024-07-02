import React, { useState } from "react";

interface TodoItem {
    id : number,
    title  : string
}
interface InputTodoProps {
  onAddTodo: (todo : TodoItem) => void;
}

const InputTodo: React.FC<InputTodoProps> = ({ onAddTodo }) => {
  const [title, setTitle] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if(!title) return ;
    const newItem  = {
        title,
        id: Math.floor(Math.random()*1000)
    }
    onAddTodo(newItem)
    setTitle("");
    // console.log(newItem);
    
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter todo"
      />
      <button type="submit">Add Item</button>
    </form>
  );
};

export default InputTodo;

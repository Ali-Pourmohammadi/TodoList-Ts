import React, { useState } from 'react';
import './App.css';
import Container from './assets/components/TodoContainer';
import ListItem from './assets/components/Listitems';
import InputTodo from './assets/components/InputTodo';

interface TodoItem {
  title: string;
  id: number;
}

const App: React.FC = () => {
  const [items, setItems] = useState<TodoItem[]>([
    // { id: 1, title: 'Learn React' },
    // { id: 2, title: 'Build a Todo App' },
    // { id: 3, title: 'Deploy the App' }
  ]);


  //  add item to  list
  function handleAddTodo(newItem:TodoItem){
    setItems([...items , newItem])
  }

  //  delete items from list
  function handleDelete (id : number){
    setItems(items.filter(item => item.id !== id));  }



   
  function handleEditTodo (id: number)  {
    const newTitle = prompt("Edit item title:");
    if (newTitle) {
      setItems(items.map(item => (item.id === id ? { ...item, title: newTitle } : item)));
    }
  };
  return (
    <Container>
      <ListItem items={items}  onDelete={handleDelete}  onEdit = {handleEditTodo}/>
      <InputTodo onAddTodo={handleAddTodo}/>
    </Container>
  );
};

export default App;

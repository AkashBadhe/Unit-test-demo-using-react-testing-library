import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from 'uuid';

export default function TodoApp(props) {
  const [todoItems, setTodoItems] = useState(props.items);

  const addItem = (todoItem) => {
    setTodoItems([
      ...todoItems,
      {
        index: todoItems.length + 1,
        value: todoItem.newItemValue,
        done: false,
        id: uuidv4()
      },
    ]);
  };

  const removeItem = (itemIndex) => {
    const items = todoItems.filter((item, index) => index !== itemIndex);
    setTodoItems(items);
  };

  const markTodoDone = (itemIndex) => {
    const newItems = [...todoItems];
    const todo = newItems[itemIndex];
    
    newItems.splice(itemIndex, 1);
    todo.done = !todo.done;
    todo.done ? newItems.push(todo) : newItems.unshift(todo);
    setTodoItems(newItems);
  };

  return (
    <div id="main">
      <h1>My Todo list</h1>
      <TodoList
        items={todoItems}
        removeItem={removeItem}
        markTodoDone={markTodoDone}
      />
      <TodoForm onAddItem={addItem} />
    </div>
  );
}

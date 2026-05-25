import TodoHeading from "./components/TodoHeading";
import AddTodo from "./components/AddTodo";
import TodoItem from "./components/TodoItem";
import TodoItems from "./components/TodoItems";
import "./App.css";
import { useState } from "react";

import WelcomeMessage from "./components/WelcomeMessage";

function App() {
  // const initialtodoItems = [
  //   {
  //     name: "BUY Coffee",
  //     dueDate: "02/03/2004",
  //   },
  //   {
  //     name: "BUY MILK",
  //     dueDate: "02/03/2000",
  //   },
  //   {
  //     name: "go to gym",
  //     dueDate: "01/01/2004",
  //   },
  // ];

  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (todoItem, todoDate) => {


    const newTodoItems = [...todoItems, { name: todoItem, dueDate: todoDate }];
    setTodoItems(newTodoItems);
  };

  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter(items => items.name !== todoItemName);
    setTodoItems(newTodoItems);


  }


  return (
    <>
      <TodoHeading></TodoHeading>
      <AddTodo onNewItem={handleNewItem}></AddTodo>
      {todoItems.length === 0 && <WelcomeMessage></WelcomeMessage>}
      <TodoItems todoItems={todoItems}  onDeleteClick={handleDeleteItem} ></TodoItems>
    </>
  );
}
export default App;

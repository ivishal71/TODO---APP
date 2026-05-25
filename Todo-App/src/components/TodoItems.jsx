import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";

function TodoItems({ todoItems, onDeleteClick }) {
  return (
    <div className={styles.todoContainer}>
      <>
        {todoItems.map((items) => (
          <TodoItem
            key={items.name}
            todoItem={items.name}
            todoDate={items.dueDate}
            onDeleteClick={onDeleteClick}
          ></TodoItem>
        ))}
      </>
    </div>
  );
}
export default TodoItems;

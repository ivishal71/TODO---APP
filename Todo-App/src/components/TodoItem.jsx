import { MdDelete } from "react-icons/md";
f;

function TodoItem({ todoItem, todoDate, onDeleteClick }) {
  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col">{todoItem}</div>
        <div className="col">{todoDate}</div>
        <div className="col">
          <button
            type="button"
            className="btn btn-danger kg-button"
            onClick={() => onDeleteClick(todoItem)}
          >
            <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
}
export default TodoItem;

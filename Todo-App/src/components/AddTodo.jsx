import { useState } from "react";
import { MdOutlineAddBox } from "react-icons/md";

function AddTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState("");
  const [todoDate, setTodoDate] = useState("");

  //local methods here--
  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };
  const handleDateChange = (event) => {
    setTodoDate(event.target.value);
  };

  const handleAddButtonClicked = () => {
    onNewItem(todoName, todoDate);
    setTodoDate("");
    setTodoName("");
  };

  return (
    <div className="container text-center">
      <div className="row kg-row">
        <div className="col">
          <input
            type="text"
            placeholder="enter here.."
            value={todoName}
            onChange={handleNameChange}
          />
        </div>
        <div className="col">
          <input type="date" value={todoDate} onChange={handleDateChange} />
        </div>
        <div className="col">
          <button
            type="button"
            className="btn btn-success kg-button"
            onClick={handleAddButtonClicked}
          >
            <MdOutlineAddBox />
          </button>
        </div>
      </div>
    </div>
  );
}
export default AddTodo;

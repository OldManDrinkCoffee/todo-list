import React from "react";

function AddTaskForm({ newTask, handelSubmit, handleInputChange }) {
  return (
    <form onSubmit={handelSubmit} className="form">
      <label htmlFor="newitem">Add to the todolist</label>
      <input
        type="text"
        id="newitem"
        value={newTask}
        onChange={handleInputChange}
      />
      <button className="submit">Add Items</button>
    </form>
  );
}

export default AddTaskForm;

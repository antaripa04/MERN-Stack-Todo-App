import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function CreateTodo() {
  const history = useHistory();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");
  const completed = false;

  const onSubmit = async (e) => {
    try {
      e.preventDefault();

      const newTodo = {
        title,
        description,
        priority,
        completed,
      };

      // console.log(newTodo);

      const res = await axios.post("http://localhost:3030/api/todos/", newTodo);
      console.log(res.data);
      history.push("/");

    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container">
      <h3>Create Todo</h3>
      <form onSubmit={onSubmit}>

        <div className="form-group mb-3">
          <label htmlFor="title">Title: </label>
          <input
            id="title"
            name="title"
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="description">Description: </label>
          <input
            id="description"
            name="description"
            type="text"
            className="form-control"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="form-group mb-3">
          <label className="me-3" htmlFor="priority">
            Priority:
          </label>
          <div className="form-check form-check-inline">
            <input
              type="radio"
              className="form-check-input"
              name="priority"
              id="priorityLow"
              value="Low"
              checked={priority === "Low"}
              onChange={(e) => setPriority(e.target.value)}
            />
            <label htmlFor="priorityLow" className="form-check-label">
              Low
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              type="radio"
              className="form-check-input"
              name="priority"
              id="priorityMedium"
              value="Medium"
              checked={priority === "Medium"}
              onChange={(e) => setPriority(e.target.value)}
            />
            <label htmlFor="priorityMedium" className="form-check-label">
              Medium
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              type="radio"
              className="form-check-input"
              name="priority"
              id="priorityHigh"
              value="High"
              checked={priority === "High"}
              onChange={(e) => setPriority(e.target.value)}
            />
            <label htmlFor="priorityHigh" className="form-check-label">
              High
            </label>
          </div>
        </div>

        <div className="form-group mb-3">
          <input
            type="submit"
            className="btn btn-warning btn-outline-dark"
            value="Create Todo"
          />
        </div>
      </form>
    </div>
  );
}

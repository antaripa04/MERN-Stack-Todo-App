import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

export default function EditTodo() {
  const history = useHistory();
  const params = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    const getTodo = async (id) => {
      try {
        const res = await axios.get(
          `http://localhost:3030/api/todos/${params.id}`
        );
        const { completed, description, priority, title } = res.data;
        setCompleted(completed);
        setDescription(description);
        setPriority(priority);
        setTitle(title);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    getTodo(params.id);
  }, [params.id]);

  const onSubmit = async (e) => {
    try {
      e.preventDefault();

      const newTodo = {
        description,
        title,
        priority,
        completed,
      };

      const res = await axios.put(
        `http://localhost:3030/api/todos/${params.id}`,
        newTodo
      );
      console.log(res.data);
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTodo = async (e) => {
    try {
      e.preventDefault();
      const res = axios.delete(`http://localhost:3030/api/todos/${params.id}`);
      console.log(res.data);
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return !isLoading ? (
    <div className="container">
      <h3>Edit Todo</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group mb-3">
          <label>Title: </label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group mb-3">
          <label>Description: </label>
          <input
            type="text"
            className="form-control"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="form-group mb-3">
          <label className="me-3" htmlFor="priorityOptions">
            Priority:
          </label>
          <div className="form-check form-check-inline">
            <input
              type="radio"
              className="form-check-input"
              name="priorityOptions"
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
              name="priorityOptions"
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
              name="priorityOptions"
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
        <div className="form-check form-check-inline">
          <input
            type="checkbox"
            className="form-check-input"
            name="completedCheckbox"
            id="completedCheckbox"
            value={completed}
            checked={completed}
            onChange={(e) => setCompleted(!completed)}
          />
          <label htmlFor="completedCheckbox" className="form-check-label">
            Completed
          </label>
        </div>
        <br />
        <br />
        <div className="form-group mb-3">
          <input
            type="submit"
            className="btn btn-primary mx-2"
            value="Update Todo"
          />

          <input
            type="button"
            className="btn btn-danger float-right"
            value="Delete Todo"
            onClick={deleteTodo}
          />
        </div>
      </form>
    </div>
  ) : (
    <div className="container text-center mt-5">
      <h3>Getting Todo ..</h3>
    </div>
  );
}

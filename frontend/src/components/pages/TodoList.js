import axios from "axios";
import React, { useEffect, useState } from "react";
import Todo from "../common/Todo";

export default function TodoList() {
  const [todos, setTodods] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchTodos = async () => {
    try {
      const res = await axios.get("http://localhost:3030/api/todos/");
      setTodods(res.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return isLoading ? (
    <div className="container text-center mt-5">
      <h3>Loading Todos...</h3>
    </div>
  ) : todos.length ? (
    <div className="container">
      <h3>Todos List</h3>
      <table className="table table-hover mt-3">
        <thead>
          <tr>
            <th>Date</th>
            <th>Title</th>
            <th>Description</th>
            <th>Priority</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <Todo key={todo._id} todo={todo} />
          ))}
        </tbody>
      </table>
    </div>
  ) : (
    <div className="container text-center mt-5">There are no Todos yet!!</div>
  );
}

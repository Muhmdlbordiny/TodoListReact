import { createContext, useContext, useEffect, useState } from "react";

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const apiUrl = "https://todos.runasp.net/api/todo";
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("");

  const fetchTodos = async () => {
    try {
      const url = filter ? `${apiUrl}/getstatus?status=${filter}` : `${apiUrl}/getstatus`;
      const res = await fetch(url);
      const data = await res.json();
      setTodos(data);
    } catch (err) {
      console.error("Error fetching todos", err);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, [filter]);

  const createTodo = async (todo) => {
    await fetch(`${apiUrl}/createtodo`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(todo),
    });
    fetchTodos();
  };

  const updateTodo = async (todo) => {
    await fetch(`${apiUrl}/update/${todo.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(todo),
    });
    fetchTodos();
  };

  const deleteTodo = async (id) => {
    await fetch(`${apiUrl}/delete/${id}`, {
      method: "DELETE",
    });
    fetchTodos();
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        createTodo,
        updateTodo,
        deleteTodo,
        setFilter,
        filter,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export const useTodos = () => useContext(TodoContext);

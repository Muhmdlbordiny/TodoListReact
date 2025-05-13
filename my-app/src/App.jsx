import './App.css';
import { useState } from "react";
import { useTodos } from "./context/TodoContext";
import TodoModal from "./components/TodoModal";
import DeleteModal from "./components/DeleteModal";
import FilterComponent from "./components/FilterComponent";
import TodoList from "./components/TodoList";

export default function App() {
  const { createTodo, updateTodo, deleteTodo } = useTodos();
  const [showModal, setShowModal] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [currentTodo, setCurrentTodo] = useState(null);

  const handleSave = (todo) => {
    if (todo.id) {
      updateTodo(todo);
    } else {
      createTodo(todo);
    }
    setShowModal(false);
  };

  const handleAdd = () => {
    setCurrentTodo(null); // ده مودال فاضي
    setShowModal(true);
  };

  const handleEdit = (todo) => {
    setCurrentTodo(todo);
    setShowModal(true);
  };

  const handleDelete = (todo) => {
    setCurrentTodo(todo);
    setShowDelete(true);
  };

  const confirmDelete = () => {
    if (currentTodo) {
      deleteTodo(currentTodo.id);
    }
    setShowDelete(false);
    setCurrentTodo(null);
  };

  return (
    <div className="container mt-4">
      <h3 className="mb-3">Todo List</h3>

      <FilterComponent />

      <button className="btn btn-success mb-3" onClick={handleAdd}>
        + Add Todo
      </button>

      <TodoList onEdit={handleEdit} onDelete={handleDelete} />

      <TodoModal
        show={showModal}
        onClose={() => setShowModal(false)}
        onSave={handleSave}
        initialData={currentTodo}
      />

      <DeleteModal
        show={showDelete}
        onClose={() => setShowDelete(false)}
        onConfirm={confirmDelete}
        todo={currentTodo} // عشان يظهر الاسم جوا المودال
      />
    </div>
  );
}


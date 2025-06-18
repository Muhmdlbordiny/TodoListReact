import { useTodos } from "../context/TodoContext";

export default function TodoItem({ todo, onEdit }) {
  const { deleteTodo } = useTodos();

  const handleEdit = () => {
    onEdit(todo); // هنا هنشغل الـ modal لفتح التعديل
  };

  const handleDelete = () => {
    deleteTodo(todo.id);
  };

  return (
    <li className="list-group-item d-flex justify-content-between ">
      <div>
        <h5>{todo.title} <span className="badge bg-info">{todo.priority}</span></h5>
        <p>{todo.description}</p>
        <small>Status: {todo.status} | Due: {todo.dueDate?.split("T")[0]}</small>
      </div>
      <div>
        <button className="btn btn-warning btn-sm me-2" onClick={handleEdit}>
          Edit
        </button>
        <button className="btn btn-danger btn-sm" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </li>
  );
}

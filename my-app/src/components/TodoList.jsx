import { useTodos } from "../context/TodoContext";

export default function TodoList({ onEdit, onDelete }) {
  const { todos } = useTodos();
// const [date, time] = todo.dueDate?.split(' '); // افترض أن التاريخ والوقت مفصولان بمسافة

  return (
    <ul className="list-group bg-dark">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className="list-group-item d-flex justify-content-between align-items-center bg-dark text-white"
        >
          <div>
            <h5>
              {todo.title}{" "}
              <span className="badge bg-info">{todo.priority}</span>
            </h5>
            <p>{todo.description}</p>
            <small className="fw-bold">
              Status: <span className="bg-warning text-white fw-bold border-2 rounded-2"> {todo.status} </span>   | Due Date:  {todo.dueDate?.split('T')[0]} <span>&nbsp;</span> {todo.dueDate?.split('T')[1]}

            </small>
          </div>
          <div>
            <button
              className="btn btn-warning btn-sm me-2"
              onClick={() => onEdit(todo)}
            >
              Edit
            </button>
            <button
              className="btn btn-danger btn-sm"
              onClick={() => onDelete(todo)}
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}


// import { useState, useEffect } from "react";

// export default function TodoModal({ show, onClose, onSave, initialData }) {
//   const [todo, setTodo] = useState({
//     title: "",
//     description: "",
//     status: "",
//     priority: "",
//     dueDate: "",
//   });

//   // كل ما يتغير initialData نعيد ضبط القيم
//   useEffect(() => {
//     if (initialData) {
//       setTodo(initialData);
//     } else {
//       setTodo({
//         title: "",
//         description: "",
//         status: "",
//         priority: "",
//         dueDate: "",
//       });
//     }
//   }, [initialData, show]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSave(todo);
//     console.log("Saving todo:", todo);
//   };

//   return (
//     <div
//       className={`modal ${show ? "show" : ""}`}
//       style={{ display: show ? "block" : "none" }}
//     >
//       <div className="modal-dialog">
//         <div className="modal-content">
//           <div className="modal-header">
//             <h5 className="modal-title">{todo.id ? "Edit Todo" : "Add Todo"}</h5>
//             <button className="btn-close" onClick={onClose}></button>
//           </div>
//           <div className="modal-body">
//             <form onSubmit={handleSubmit}>
//               {/* باقي الحقول */}
//               <div className="mb-3">
//                 <label className="form-label">Title</label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   value={todo.title}
//                   onChange={(e) => setTodo({ ...todo, title: e.target.value })}
//                   required
//                 />
//               </div>

//               <div className="mb-3">
//                 <label className="form-label">Description</label>
//                 <textarea
//                   className="form-control"
//                   value={todo.description}
//                   onChange={(e) =>
//                     setTodo({ ...todo, description: e.target.value })
//                   }
//                 />
//               </div>

//               <div className="mb-3">
//                 <label className="form-label">Priority</label>
//                 <select
//                   className="form-control"
//                   value={todo.priority}
//                   onChange={(e) =>
//                     setTodo({ ...todo, priority: e.target.value })
//                   }
//                   required
//                 >
//                   <option value="">Select Priority</option>
//                   <option value="High">High</option>
//                   <option value="Medium">Medium</option>
//                   <option value="Low">Low</option>
//                 </select>
//               </div>

//               <div className="mb-3">
//                 <label className="form-label">Status</label>
//                 <select
//                   className="form-control"
//                   value={todo.status}
//                   onChange={(e) =>
//                     setTodo({ ...todo, status: e.target.value })
//                   }
//                   required
//                 >
//                   <option value="">Select Status</option>
//                   <option value="Pending">Pending</option>
//                   <option value="InProgress">In Progress</option>
//                   <option value="Completed">Completed</option>
//                 </select>
//               </div>

//               <div className="mb-3">
//                 <label className="form-label">Due Date</label>
//                 <input
//                   type="datetime-local"
//                   className="form-control"
//                   value={todo.dueDate}
//                   onChange={(e) =>
//                     setTodo({ ...todo, dueDate: e.target.value })
//                   }
//                 />
//               </div>

//               <div className="d-flex justify-content-end">
//                 <button type="submit" className="btn btn-primary me-2">
//                   Save
//                 </button>
//                 <button
//                   type="button"
//                   className="btn btn-secondary"
//                   onClick={onClose}
//                 >
//                   Cancel
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import { useState, useEffect } from "react";

export default function TodoModal({ show, onClose, onSave, initialData }) {
  const [todo, setTodo] = useState({
    title: "",
    description: "",
    status: "Pending",
    priority: "Low",
    dueDate: "",
  });

  useEffect(() => {
    if (initialData) {
      setTodo(initialData);
    } else {
      setTodo({
        title: "",
        description: "",
        status: "Pending",
        priority: "Low",
        dueDate: "",
      });
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTodo((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(todo);
  };

  return (
    <>
      <div
        className={`modal fade  ${show ? "show" : ""}`}
        style={{ display: show ? "block" : "none" }}
        tabIndex="-1"
      >
        <div className="modal-dialog bg-dark">
          <form onSubmit={handleSubmit} className="modal-content bg-dark text-white">
            <div className="modal-header">
              <h5 className="modal-title">{todo.id ? "Edit Todo" : "Add Todo"}</h5>
              <button type="button" className="btn-close" onClick={onClose}></button>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <label className="form-label">Title</label>
                <input
                  type="text"
                  className="form-control"
                  name="title"
                  value={todo.title}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Description</label>
                <textarea
                  className="form-control"
                  name="description"
                  value={todo.description}
                  onChange={handleChange}
                ></textarea>
              </div>
              <div className="mb-3">
                <label className="form-label">Status</label>
                <select
                  className="form-select"
                  name="status"
                  value={todo.status}
                  onChange={handleChange}
                >
                  <option value="Pending">Pending</option>
                  <option value="InProgress">In Progress</option>
                  <option value="Completed">Completed</option>
                </select>
              </div>
              <div className="mb-3">
                <label className="form-label">Priority</label>
                <select
                  className="form-select"
                  name="priority"
                  value={todo.priority}
                  onChange={handleChange}
                >
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                </select>
              </div>
              <div className="mb-3">
                <label className="form-label">Due Date</label>
                <input
                  type="datetime-local"
                  className="form-control"
                  name="dueDate"
                  value={todo.dueDate || ""}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={onClose}>
                Cancel
              </button>
              <button type="submit" className="btn btn-primary">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
      {show && <div className="modal-backdrop fade show"></div>}
    </>
  );
}

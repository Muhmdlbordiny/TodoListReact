import { useState } from "react";
import { useTodos } from "../context/TodoContext";

export default function FilterComponent() {
  const [selectedStatus, setSelectedStatus] = useState("All");
  const { changeFilter } = useTodos();

  const handleFilterChange = (e) => {
    setSelectedStatus(e.target.value);
    changeFilter(e.target.value); // تحديث الفلتر
  };

  return (
    <>
    <div className="mb-3">
      <select
        value={selectedStatus}
        onChange={handleFilterChange}
        className="form-select bg-dark text-white"
      >
        <option value="All">All</option>
        <option value="Pending">Pending</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
      </select>
    </div>
    </>
  );
}

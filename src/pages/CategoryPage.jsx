import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import TaskCard from "../components/cards/TaskCard";

export default function CategoryPage() {
  const { name } = useParams();

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/tasks")
      .then((res) => {
        setTasks(res.data[name] || []);
      })
      .catch(console.error);
  }, [name]);

  return (
    <div style={{ padding: "30px" }}>
      <Link to="/">⬅ Back</Link>

      <h1>{name}</h1>

      <p>{tasks.length} Tasks</p>

      {tasks.length === 0 ? (
        <p>No Tasks</p>
      ) : (
        tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
          />
        ))
      )}
    </div>
  );
}
import { useEffect, useState } from "react";
import axios from "axios";
import {
  Container,
  Typography,
  Box,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";

import TaskCard from "../cards/TaskCard";
import LoadingState from "../common/LoadingState";
import EmptyState from "../common/EmptyState";
import ErrorState from "../common/ErrorState";

export default function CategoryTemplate({
  title,
  category,
}) {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    loadTasks();
  }, []);

  async function loadTasks() {
    try {
      setLoading(true);

      const res = await axios.get(
        "http://127.0.0.1:8000/tasks"
      );

      setTasks(res.data[category] || []);
    } catch {
      setError("Unable to load tasks.");
    } finally {
      setLoading(false);
    }
  }

  if (loading) return <LoadingState />;

  if (error) return <ErrorState message={error} />;

  return (
    <Container maxWidth="lg">

      <Box mt={4} mb={4}>

        <Button
          component={Link}
          to="/"
          variant="outlined"
        >
          ← Dashboard
        </Button>

      </Box>

      <Typography
        variant="h4"
        gutterBottom
      >
        {title}
      </Typography>

      <Typography color="text.secondary">
        {tasks.length} Tasks
      </Typography>

      <Box mt={4}>

        {tasks.length === 0 ? (
          <EmptyState />
        ) : (
          tasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
            />
          ))
        )}

      </Box>

    </Container>
  );
}

import { useEffect, useState } from "react";

import {
  Container,
  Typography,
  Box,
  CircularProgress,
  Button,
  TextField,
} from "@mui/material";

import { Link } from "react-router-dom";

import api from "../../services/api";
import TaskCard from "../cards/TaskCard";

export default function CategoryLayout({ category }) {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadTasks();
  }, [category]);

  const loadTasks = async () => {
    try {
      setLoading(true);

      const res = await api.get("/tasks/");

      setTasks(res.data[category] || []);
    } catch (err) {
      console.error("Category tasks error:", err);
      setTasks([]);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        mt={8}
      >
        <CircularProgress />
      </Box>
    );
  }

  const filteredTasks = tasks.filter((task) =>
    (task.title || "")
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <Container maxWidth="lg">
      <Button
        component={Link}
        to="/"
        sx={{ mb: 3 }}
      >
        ← Back to Dashboard
      </Button>

      <Typography variant="h4" mb={1}>
        {category}
      </Typography>

      <Typography color="text.secondary" mb={3}>
        {tasks.length} Tasks
      </Typography>

      <TextField
        fullWidth
        placeholder={`Search ${category}...`}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        sx={{ mb: 4 }}
      />

      {filteredTasks.length === 0 ? (
        <Typography>No Tasks Found</Typography>
      ) : (
        filteredTasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
          />
        ))
      )}
    </Container>
  );
}


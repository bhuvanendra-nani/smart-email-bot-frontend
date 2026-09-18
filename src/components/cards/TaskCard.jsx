import { useState } from "react";

import {
  Card,
  CardContent,
  Typography,
  Chip,
  Stack,
  Divider,
  Collapse,
  Button,
  Grid,
  Box,
  Link,
} from "@mui/material";

import {
  Business,
  Person,
  CalendarToday,
  School,
  Payments,
  LocationOn,
  Link as LinkIcon,
  ExpandMore,
  ExpandLess,
} from "@mui/icons-material";

export default function TaskCard({ task }) {
  const [expanded, setExpanded] = useState(false);

  const Detail = ({ icon, label, value }) =>
    value ? (
      <Stack
        direction="row"
        spacing={1}
        alignItems="center"
        sx={{ mb: 1.2 }}
      >
        {icon}
        <Typography variant="body2">
          <strong>{label}:</strong> {value}
        </Typography>
      </Stack>
    ) : null;

  return (
    <Card
      sx={{
        mb: 3,
        borderRadius: 4,
        boxShadow: 4,
        transition: ".25s",

        "&:hover": {
          transform: "translateY(-3px)",
          boxShadow: 8,
        },
      }}
    >
      <CardContent>

        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography
            variant="h6"
            fontWeight="bold"
          >
            {task.action ? `🟢 ${task.action}` : "🟢 Task"}
          </Typography>

          <Chip
            label={task.task_type}
            color="success"
            variant="outlined"
          />
        </Stack>

        <Typography
          variant="h5"
          fontWeight="bold"
          sx={{ mt: 2 }}
        >
          {task.title}
        </Typography>

        {task.description && (
          <Typography
            color="text.secondary"
            sx={{ mt: 1 }}
          >
            {task.description}
          </Typography>
        )}

        <Divider sx={{ my: 2 }} />

        <Grid container spacing={2}>

          <Grid item xs={12} md={6}>
            <Detail
              icon={<Business fontSize="small" />}
              label="Company"
              value={task.company}
            />

            <Detail
              icon={<Person fontSize="small" />}
              label="Role"
              value={task.role}
            />

            <Detail
              icon={<CalendarToday fontSize="small" />}
              label="Deadline"
              value={task.deadline}
            />
          </Grid>

          <Grid item xs={12} md={6}>

            <Chip
              label={task.priority}
              color="primary"
              sx={{ mr: 1 }}
            />

            {task.mode && (
              <Chip
                label={task.mode}
                color="secondary"
              />
            )}

          </Grid>

        </Grid>

        <Button
          sx={{ mt: 2 }}
          endIcon={
            expanded ? <ExpandLess /> : <ExpandMore />
          }
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "Show Less" : "Show More"}
        </Button>

        <Collapse in={expanded}>

          <Divider sx={{ my: 2 }} />

          <Box>

            <Detail
              icon={<School fontSize="small" />}
              label="Eligibility"
              value={task.eligibility}
            />

            <Detail
              icon={<School fontSize="small" />}
              label="Branches"
              value={task.branches}
            />

            <Detail
              icon={<School fontSize="small" />}
              label="Batch"
              value={task.batch}
            />

            <Detail
              icon={<Payments fontSize="small" />}
              label="CTC"
              value={task.ctc}
            />

            <Detail
              icon={<Payments fontSize="small" />}
              label="Stipend"
              value={task.stipend}
            />

            <Detail
              icon={<LocationOn fontSize="small" />}
              label="Venue"
              value={task.venue}
            />

            <Detail
              icon={<LocationOn fontSize="small" />}
              label="Location"
              value={task.location}
            />

            <Detail
              icon={<LocationOn fontSize="small" />}
              label="Mode"
              value={task.mode}
            />

            <Detail
              icon={<Business fontSize="small" />}
              label="Selection Process"
              value={task.process}
            />

            <Detail
              icon={<Person fontSize="small" />}
              label="Contact"
              value={task.contact}
            />

            {task.registration_link && (
              <Stack
                direction="row"
                spacing={1}
                alignItems="center"
              >
                <LinkIcon fontSize="small" />

                <Link
                  href={task.registration_link}
                  target="_blank"
                  underline="hover"
                >
                  Registration Link
                </Link>
              </Stack>
            )}

          </Box>

        </Collapse>

      </CardContent>
    </Card>
  );
}
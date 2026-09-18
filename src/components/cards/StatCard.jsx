import {
  Card,
  CardContent,
  Typography,
  Box,
} from "@mui/material";

import { Link } from "react-router-dom";

export default function StatCard({
  title,
  value,
  icon,
  color = "#2563eb",
  path,
}) {
  const cardContent = (
    <CardContent>
      <Box
        display="flex"
        justifyContent="space-between"
      >
        <Box>
          <Typography color="text.secondary">
            {title}
          </Typography>

          <Typography
            variant="h4"
            fontWeight={700}
          >
            {value}
          </Typography>
        </Box>

        <Typography
          sx={{
            fontSize: 50,
          }}
        >
          {icon}
        </Typography>
      </Box>
    </CardContent>
  );

  if (path) {
    return (
      <Card
        component={Link}
        to={path}
        sx={{
          borderRadius: 4,
          textDecoration: "none",
          color: "inherit",
          cursor: "pointer",
          transition: ".3s",

          "&:hover": {
            transform: "translateY(-6px)",
            boxShadow: 8,
          },
        }}
      >
        {cardContent}
      </Card>
    );
  }

  return (
    <Card
      sx={{
        borderRadius: 4,
        transition: ".3s",
        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: 8,
        },
      }}
    >
      {cardContent}
    </Card>
  );
}
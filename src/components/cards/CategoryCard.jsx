import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from "@mui/material";

import { Link } from "react-router-dom";

export default function CategoryCard({
  title,
  icon,
  count,
}) {

  const routes = {
    Internship: "/internship",
    Placement: "/placement",
    "Online Test": "/online-tests",
    Academics: "/academics",
    Other: "/other",
  };

  return (
    <Card>
      <CardActionArea
        component={Link}
        to={routes[title]}
      >
        <CardContent>

          <Typography variant="h5">
            {icon} {title}
          </Typography>

          <Typography color="text.secondary">
            {count} Tasks
          </Typography>

        </CardContent>
      </CardActionArea>
    </Card>
  );
}
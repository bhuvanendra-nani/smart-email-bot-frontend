import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  Divider,
  Box,
} from "@mui/material";

import {
  Dashboard,
  Work,
  Business,
  Quiz,
  School,
  Folder,
  EmojiEvents,
  Groups,
  Assignment,
  Event,
} from "@mui/icons-material";

import { Link, useLocation } from "react-router-dom";

const drawerWidth = 260;

const items = [
  {
    text: "Dashboard",
    icon: <Dashboard />,
    path: "/",
  },
  {
    text: "Internships",
    icon: <Work />,
    path: "/internship",
  },
  {
    text: "Placements",
    icon: <Business />,
    path: "/placement",
  },
  {
    text: "Online Tests",
    icon: <Quiz />,
    path: "/online-tests",
  },
  {
    text: "Interviews",
    icon: <Groups />,
    path: "/interviews",
  },
  {
    text: "Workshops",
    icon: <Event />,
    path: "/workshops",
  },
  {
    text: "Hackathons",
    icon: <EmojiEvents />,
    path: "/hackathons",
  },
  {
    text: "Academics",
    icon: <School />,
    path: "/academics",
  },
  {
    text: "Assignments",
    icon: <Assignment />,
    path: "/assignments",
  },
  {
    text: "Other",
    icon: <Folder />,
    path: "/other",
  },
];

export default function Sidebar() {
  const location = useLocation();

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,

        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          bgcolor: "#0f172a",
          color: "#fff",
          borderRight: "none",
        },
      }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          fontWeight="bold"
          sx={{
            width: "100%",
            textAlign: "center",
          }}
        >
          📧 Smart Email Bot
        </Typography>
      </Toolbar>

      <Divider sx={{ bgcolor: "#334155" }} />

      <List sx={{ mt: 1 }}>
        {items.map((item) => (
          <ListItemButton
            key={item.text}
            component={Link}
            to={item.path}
            selected={location.pathname === item.path}
            sx={{
              mx: 1,
              my: 0.5,
              borderRadius: 2,
              color: "#fff",

              "& .MuiListItemIcon-root": {
                color: "#cbd5e1",
              },

              "&:hover": {
                bgcolor: "#1e293b",
              },

              "&.Mui-selected": {
                bgcolor: "#2563eb",
              },

              "&.Mui-selected:hover": {
                bgcolor: "#2563eb",
              },
            }}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>

            <ListItemText primary={item.text} />
          </ListItemButton>
        ))}
      </List>

      <Box sx={{ flexGrow: 1 }} />

      <Divider sx={{ bgcolor: "#334155" }} />

      <Box
        sx={{
          p: 2,
          textAlign: "center",
          color: "#94a3b8",
          fontSize: 13,
        }}
      >
        Smart Email Bot
        <br />
        Version 2.0
      </Box>
    </Drawer>
  );
}
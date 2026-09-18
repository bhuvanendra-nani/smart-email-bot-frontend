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
  Button,
} from "@mui/material";

import DashboardIcon from "@mui/icons-material/Dashboard";
import WorkIcon from "@mui/icons-material/Work";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import QuizIcon from "@mui/icons-material/Quiz";
import SchoolIcon from "@mui/icons-material/School";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import EventIcon from "@mui/icons-material/Event";
import AssignmentIcon from "@mui/icons-material/Assignment";
import FolderIcon from "@mui/icons-material/Folder";
import RefreshIcon from "@mui/icons-material/Refresh";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

import { Link, useLocation } from "react-router-dom";
import axios from "axios";

const drawerWidth = 260;

const menuItems = [
  {
    text: "Dashboard",
    icon: <DashboardIcon />,
    path: "/",
  },
  {
    text: "Internship",
    icon: <WorkIcon />,
    path: "/internship",
  },
  {
    text: "Placement",
    icon: <BusinessCenterIcon />,
    path: "/placement",
  },
  {
    text: "Online Tests",
    icon: <QuizIcon />,
    path: "/online-tests",
  },
  {
    text: "Academics",
    icon: <SchoolIcon />,
    path: "/academics",
  },
  {
    text: "Hackathons",
    icon: <EmojiEventsIcon />,
    path: "/hackathons",
  },
  {
    text: "Workshops",
    icon: <EventIcon />,
    path: "/workshops",
  },
  {
    text: "Assignments",
    icon: <AssignmentIcon />,
    path: "/assignments",
  },
  {
    text: "Other",
    icon: <FolderIcon />,
    path: "/other",
  },
];

export default function Navbar() {
  const location = useLocation();

  const runBot = async () => {
    try {
      await axios.post("http://127.0.0.1:8000/bot/run");
      alert("Bot executed successfully.");
      window.location.reload();
    } catch (err) {
      console.log(err);
      alert("Unable to run bot.");
    }
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          background: "#0f172a",
          color: "#fff",
        },
      }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          fontWeight="bold"
          sx={{
            textAlign: "center",
            width: "100%",
          }}
        >
          📧 Smart Email Bot
        </Typography>
      </Toolbar>

      <Divider sx={{ bgcolor: "#334155" }} />

      <List>
        {menuItems.map((item) => (
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

              "&.Mui-selected": {
                background: "#2563eb",
              },

              "&.Mui-selected:hover": {
                background: "#2563eb",
              },

              "&:hover": {
                background: "#1e293b",
              },
            }}
          >
            <ListItemIcon sx={{ color: "#fff" }}>
              {item.icon}
            </ListItemIcon>

            <ListItemText primary={item.text} />
          </ListItemButton>
        ))}
      </List>

      <Box sx={{ flexGrow: 1 }} />

      <Divider sx={{ bgcolor: "#334155" }} />

      <Box p={2}>
        <Button
          fullWidth
          variant="contained"
          startIcon={<PlayArrowIcon />}
          onClick={runBot}
          sx={{ mb: 2 }}
        >
          Run Bot
        </Button>

        <Button
          fullWidth
          variant="outlined"
          startIcon={<RefreshIcon />}
          onClick={() => window.location.reload()}
          sx={{
            color: "#fff",
            borderColor: "#fff",

            "&:hover": {
              borderColor: "#60a5fa",
            },
          }}
        >
          Refresh
        </Button>
      </Box>
    </Drawer>
  );
}
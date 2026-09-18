import { Box, Typography, Button } from "@mui/material";
import InboxIcon from "@mui/icons-material/Inbox";

export default function EmptyState({ onRefresh }) {
  return (
    <Box
      sx={{
        py: 10,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <InboxIcon
        sx={{
          fontSize: 90,
          color: "#90caf9",
          mb: 2,
        }}
      />

      <Typography
        variant="h5"
        fontWeight="bold"
      >
        No Emails Found
      </Typography>

      <Typography
        color="text.secondary"
        sx={{
          mt: 1,
          mb: 4,
        }}
      >
        Your smart inbox is empty.
        <br />
        Run the bot or check again later.
      </Typography>

      <Button
        variant="contained"
        onClick={onRefresh}
      >
        Refresh
      </Button>
    </Box>
  );
}
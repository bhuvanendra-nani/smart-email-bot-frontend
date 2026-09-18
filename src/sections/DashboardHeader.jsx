import { Box, Typography } from "@mui/material";

export default function DashboardHeader() {
  return (
    <Box mb={4}>
      <Typography variant="h4">
        👋 Smart Email Assistant
      </Typography>

      <Typography color="text.secondary">
        Organize all your emails in one place
      </Typography>
    </Box>
  );
}
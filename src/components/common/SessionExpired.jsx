import { Box, Typography, Button } from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";

export default function SessionExpired({ onLogin }) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="70vh"
      gap={2}
    >
      <LockIcon color="warning" sx={{ fontSize: 70 }} />

      <Typography variant="h5">
        Session Expired
      </Typography>

      <Typography color="text.secondary">
        Please login again.
      </Typography>

      <Button variant="contained" onClick={onLogin}>
        Login Again
      </Button>
    </Box>
  );
}
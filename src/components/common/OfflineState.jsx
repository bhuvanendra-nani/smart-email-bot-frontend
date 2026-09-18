import { Box, Button, Typography } from "@mui/material";
import WifiOffIcon from "@mui/icons-material/WifiOff";

export default function OfflineState({ onRetry }) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="70vh"
      gap={2}
    >
      <WifiOffIcon
        sx={{
          fontSize: 70,
          color: "gray",
        }}
      />

      <Typography variant="h5">
        You're Offline
      </Typography>

      <Typography color="text.secondary">
        Please check your internet connection.
      </Typography>

      <Button
        variant="contained"
        onClick={onRetry}
      >
        Retry
      </Button>
    </Box>
  );
}
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";

export default function LoadingState() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="60vh"
      gap={2}
    >
      <CircularProgress />

      <Typography>
        Loading...
      </Typography>
    </Box>
  );
}
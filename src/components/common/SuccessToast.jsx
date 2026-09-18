import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

export default function SuccessToast({
  open,
  onClose,
  message,
}) {
  return (
    <Snackbar
      open={open}
      autoHideDuration={3000}
      onClose={onClose}
    >
      <Alert
        severity="success"
        variant="filled"
        onClose={onClose}
      >
        {message}
      </Alert>
    </Snackbar>
  );
}
import Button from "@mui/material/Button";

export default function FilledButton({
  children,
  onClick,
  startIcon,
}) {
  return (
    <Button
      variant="contained"
      startIcon={startIcon}
      onClick={onClick}
      sx={{
        borderRadius: 3,
        px: 3,
        py: 1.3,
      }}
    >
      {children}
    </Button>
  );
}
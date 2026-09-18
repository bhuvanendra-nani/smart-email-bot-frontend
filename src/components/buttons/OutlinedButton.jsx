import Button from "@mui/material/Button";

export default function OutlinedButton({
  children,
  onClick,
}) {
  return (
    <Button
      variant="outlined"
      onClick={onClick}
      sx={{
        borderRadius: 3,
      }}
    >
      {children}
    </Button>
  );
}
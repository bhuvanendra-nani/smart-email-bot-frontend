import { Box, Typography } from "@mui/material";
import SearchOffIcon from "@mui/icons-material/SearchOff";

export default function NoSearchResult({ search }) {
  return (
    <Box
      textAlign="center"
      py={8}
    >
      <SearchOffIcon
        sx={{
          fontSize: 70,
          color: "gray",
        }}
      />

      <Typography variant="h5" mt={2}>
        No Results Found
      </Typography>

      <Typography color="text.secondary">
        No category matches "{search}"
      </Typography>
    </Box>
  );
}
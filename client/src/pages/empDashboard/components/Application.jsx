import { Box, Button, Typography } from "@mui/material";
import React from "react";

const Application = () => {
  return (
    <Box sx={{ py: 8 }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mb: 2,
        }}
      >
        <Typography variant="h6" gutterBottom>
          Job Applications
        </Typography>
        <Box sx={{ display: "flex", gap: 1 }}>
          <Button variant="contained">Filter</Button>
          <Button variant="outlined">Sort</Button>
        </Box>
      </Box>
      <Box>Content here as card</Box>
    </Box>
  );
};

export default Application;

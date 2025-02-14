import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function Settings() {
  return (
    <Box sx={{ py: 8 }}>
      <Typography variant="h6" gutterBottom>
        Settings
      </Typography>
      <Box>Other Settings including preferences</Box>
    </Box>
  );
}

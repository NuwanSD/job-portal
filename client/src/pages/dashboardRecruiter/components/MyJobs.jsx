import React from "react";
import { Box, Typography } from "@mui/material";
import RecentlyPostedJobs from "./RecentlyPostedJobs";

const MyJobs = () => {
  return (
    <Box sx={{ py: 8 }}>
      <Typography variant="h6" gutterBottom>
        My Jobs
      </Typography>
      <Box sx={{ py: 5 }}>
        <RecentlyPostedJobs />
      </Box>
    </Box>
  );
};

export default MyJobs;

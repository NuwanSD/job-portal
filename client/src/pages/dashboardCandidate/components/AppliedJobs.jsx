import { Box, Typography } from "@mui/material";
import React from "react";
import RecentlyAppliedJobs from "./RecentlyAppliedJobs";

const AppliedJobs = () => {
  return (
    <Box sx={{ py: 8 }}>
      <Typography variant="h6" sx={{ pb: 4 }}>
        Applied Jobs
      </Typography>
      <RecentlyAppliedJobs />
    </Box>
  );
};

export default AppliedJobs;

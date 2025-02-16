import React from "react";
import { Box, Typography, Container, Pagination } from "@mui/material";
import RecentlyAppliedJobs from "../../dashboard/components/RecentlyAppliedJobs";

const MyJobs = () => {
  return (
    <Box sx={{ py: 8 }}>
      <Typography variant="h6" gutterBottom>
        My Jobs(589)
      </Typography>
      <Box sx={{ py: 5 }}>
        <RecentlyAppliedJobs />
      </Box>

      {/* <Box sx={{ py: 6, display: "flex", justifyContent: "center" }}>
        <Pagination count={10} variant="outlined" color="primary" />
      </Box> */}
    </Box>
  );
};

export default MyJobs;

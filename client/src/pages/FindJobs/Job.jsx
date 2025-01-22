import { Container, Box } from "@mui/material";
import React from "react";
import FeaturedJob from "./FeaturedJob";

const Job = () => {
  return (
    <div>
      <Container sx={{ py: 15 }}>
        <Box>Search Bar</Box>
        <Box sx={{ mt: 10 }}>
          <FeaturedJob />
        </Box>
      </Container>
    </div>
  );
};

export default Job;

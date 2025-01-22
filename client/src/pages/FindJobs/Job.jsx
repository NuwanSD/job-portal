import { Container, Box, Typography } from "@mui/material";
import React from "react";
import FeaturedJob from "./FeaturedJob";
import SearchField from "./SearchField";

const Job = () => {
  return (
    <div>
      <Container sx={{ py: 15 }}>
        <Typography variant="h4" sx={{}}>
          Find your dream job
        </Typography>
        <Box sx={{ mt: 5 }}>
          <SearchField />
        </Box>
        <Box sx={{ mt: 10 }}>
          <FeaturedJob />
        </Box>
      </Container>
    </div>
  );
};

export default Job;

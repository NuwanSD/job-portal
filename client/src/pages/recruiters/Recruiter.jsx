import { Box, Container, Typography, Pagination } from "@mui/material";
import React from "react";
import Companies from "./Companies";
import SearchField from "./SearchField";

const Recruiter = () => {
  return (
    <div>
      <section>
        <Container sx={{ py: 10 }}>
          <Typography variant="h4" sx={{ fontWeight: "medium" }}>
            Find Your Dream Company
          </Typography>
          <Box sx={{ mt: 8 }}>
            <SearchField />
          </Box>
        </Container>
      </section>

      <section>
        <Container sx={{ py: 8 }}>
          <Companies />
        </Container>
      </section>

      <section>
        <Container sx={{ py: 10, display: "flex", justifyContent: "center" }}>
          <Pagination count={10} variant="outlined" color="primary" />
        </Container>
      </section>
    </div>
  );
};

export default Recruiter;

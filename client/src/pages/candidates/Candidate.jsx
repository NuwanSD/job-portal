import React from "react";
import { Box, Container, Typography } from "@mui/material";
import SearchField from "./SearchField";
import CandidateList from "./CandidateList";
import Pagination from "@mui/material/Pagination";

const Candidate = () => {
  return (
    <div>
      <section>
        <Container sx={{ py: 10 }}>
          <Typography variant="h4" sx={{ mb: 8, fontWeight: "medium" }}>
            Find Best Candidate
          </Typography>
          <SearchField />
        </Container>
      </section>

      <section>
        <Container sx={{ py: 5 }}>
          <CandidateList />
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

export default Candidate;

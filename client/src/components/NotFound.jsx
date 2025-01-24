import ArrowForward from "@mui/icons-material/ArrowForward";
import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import Image from "../assets/404NotFound.jpg";
import Image2 from "../assets/404NotFound-removebg-preview.png";

const NotFound = () => {
  return (
    <div>
      <Container sx={{ py: 10 }}>
        <Box
          sx={{
            display: { xs: "row", md: "flex" },
            gap: 8,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box sx={{ mb: 5 }}>
            <Typography gutterBottom variant="h4">
              Opps! Page Not Found
            </Typography>
            <Typography variant="" color="textSecondary">
              Something went wrong. It's look like the link is broken or the
              page is removed
            </Typography>
            <Box sx={{ display: "flex", gap: 2, mt: 4 }}>
              <Button
                LinkComponent="a"
                href="/"
                variant="contained"
                endIcon={<ArrowForward />}
              >
                Home
              </Button>
              <Button variant="outlined">Go Back</Button>
            </Box>
          </Box>
          <img src={Image2} alt="image" />
        </Box>
      </Container>
    </div>
  );
};

export default NotFound;

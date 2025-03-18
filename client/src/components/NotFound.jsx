import ArrowForward from "@mui/icons-material/ArrowForward";
import { Box, Button, Container, Typography } from "@mui/material";
import { SearchOff } from "@mui/icons-material";

const NotFound = () => {
  return (
    <div>
      <Container sx={{ py: 10 }}>
        <Box
          sx={{
            justifyItems: "center",
            alignItems: "center",
          }}
        >
          <SearchOff sx={{ fontSize: 82 }} color="primary" />
          <Typography gutterBottom variant="h4">
            Opps! Page Not Found
          </Typography>
          <Typography variant="" color="textSecondary">
            Something went wrong. It's look like the link is broken or the page
            is removed
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
      </Container>
    </div>
  );
};

export default NotFound;

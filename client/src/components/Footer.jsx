import React from "react";
import {
  Box,
  Button,
  Container,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import Divider from "@mui/material/Divider";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Box
          sx={{
            py: 15,
            display: { xs: "row", lg: "flex", gap: 5 },
          }}
        >
          <Box sx={{ mr: 15, mb: 4 }}>
            <Box
              sx={{
                display: "flex",
                gap: 1,
                alignItems: "center",
                mb: 1,
              }}
            >
              <WorkOutlineIcon />
              <Typography variant="h5">JOBSPOTLIGHT</Typography>
            </Box>
            <Box>
              <Box sx={{ display: "flex", gap: 1, mb: 1 }}>
                <TextField
                  variant="outlined"
                  size="small"
                  color="primary"
                  focused
                  sx={{ backgroundColor: "white", borderRadius: 1 }}
                />
                <Button variant="contained" sx={{ textTransform: "none" }}>
                  Subscribe
                </Button>
              </Box>
              <Typography variant="body2" color="#b4b4b4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At,
                optio?
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              width: "100%",
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fill, minmax(min(150px, 100%), 1fr))",
              gap: 5,
            }}
          >
            <Box>
              <Typography sx={{ mb: 1 }}>Quick Link</Typography>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography variant="body2" component="a" href="/">
                  About Us
                </Typography>
                <Typography variant="body2" component="a" href="/">
                  Contact Us
                </Typography>
                <Typography variant="body2" component="a" href="/">
                  Pricing
                </Typography>
                <Typography variant="body2" component="a" href="/">
                  Blog
                </Typography>
              </Box>
            </Box>
            <Box>
              <Typography sx={{ mb: 1 }}>Candidate</Typography>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography variant="body2" component="a" href="/">
                  Browse Jobs
                </Typography>
                <Typography variant="body2" component="a" href="/">
                  Browse Employers
                </Typography>
                <Typography variant="body2" component="a" href="/">
                  Candidate Dashboard
                </Typography>
                <Typography variant="body2" component="a" href="/">
                  Saved Jobs
                </Typography>
              </Box>
            </Box>
            <Box>
              <Typography sx={{ mb: 1 }}>Employers</Typography>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography variant="body2" component="a" href="/">
                  Post a Job
                </Typography>
                <Typography variant="body2" component="a" href="/">
                  Browse Candidate
                </Typography>
                <Typography variant="body2" component="a" href="/">
                  Employers Dashboard
                </Typography>
                <Typography variant="body2" component="a" href="/">
                  Applications
                </Typography>
              </Box>
            </Box>
            <Box>
              <Typography sx={{ mb: 1 }}>Contact</Typography>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography variant="body2" component="a" href="/">
                  Privacy Policy
                </Typography>
                <Typography variant="body2" component="a" href="/">
                  Terms & Conditions
                </Typography>
                <Typography variant="body2" component="a" href="/">
                  Contact Us
                </Typography>
                <Typography variant="body2" component="a" href="/">
                  News
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <Divider sx={{ backgroundColor: "white" }} />
        <Box sx={{ py: 5, display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h7">
            © 2025 Jobpilot All Rights Reserved
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: 1,
              alignContent: "center",
            }}
          >
            <FacebookOutlinedIcon />
            <SubscriptionsOutlinedIcon />
            <GitHubIcon />
          </Box>
        </Box>
      </Container>
    </footer>
  );
};

export default Footer;

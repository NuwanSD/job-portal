import React from "react";
import { Box, Button, Container, Link, Typography } from "@mui/material";
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
              }}
            >
              <WorkOutlineIcon />
              <Typography variant="h5">JOBPilot</Typography>
            </Box>
            <Box>
              <Box sx={{ display: "flex", gap: 1, mb: 2 }}>
                <input type="text" style={{ borderRadius: 5 }} />
                <Button variant="contained" sx={{ textTransform: "none" }}>
                  Subscribe
                </Button>
              </Box>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At,
                optio?
              </p>
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
              <Typography>Quick Link</Typography>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <a href="/">link</a>
                <a href="/">link</a>
                <a href="/">link</a>
                <a href="/">link</a>
              </Box>
            </Box>
            <Box>
              <Typography>Candidate</Typography>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <a href="/">link</a>
                <a href="/">link</a>
                <a href="/">link</a>
                <a href="/">link</a>
              </Box>
            </Box>
            <Box>
              <Typography>Employers</Typography>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <a href="/">link</a>
                <a href="/">link</a>
                <a href="/">link</a>
                <a href="/">link</a>
              </Box>
            </Box>
            <Box>
              <Typography>Support</Typography>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <a href="/">link</a>
                <a href="/">link</a>
                <a href="/">link</a>
                <a href="/">link</a>
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

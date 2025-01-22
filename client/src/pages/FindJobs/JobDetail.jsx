import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import Icon from "../../assets/facebook.svg";
import JobDescription from "./JobDescription";
import RelatedJob from "./RelatedJob";

const JobDetail = () => {
  const params = useParams();

  console.log(params);

  return (
    <div>
      <section>
        <Container sx={{ py: 10 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <img src={Icon} alt="facebook" width={74} />
              <Box>
                <Typography variant="h5">Senior Software Engineer</Typography>
                <Typography
                  sx={{ display: "flex", gap: 1 }}
                  color="text.secondary"
                >
                  at Facebook
                  <Box
                    sx={{
                      bgcolor: "#1976D2",
                      color: "white",
                      fontSize: "10px",
                      fontWeight: "bold",
                      alignContent: "center",
                      px: 1,
                      borderRadius: 1,
                    }}
                  >
                    FULL-TIME
                  </Box>
                </Typography>
              </Box>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <BookmarkBorderOutlinedIcon
                sx={{
                  p: 1,
                  backgroundColor: "#f7f7f8",
                  color: "blue",
                  borderRadius: 1,
                }}
              />
              <Button variant="contained" sx={{ display: "flex", gap: 1 }}>
                Apply Now <ArrowForwardOutlinedIcon />
              </Button>
            </Box>
          </Box>

          <Box sx={{ mt: 5 }}>
            <JobDescription />
          </Box>
        </Container>
      </section>

      <section>
        <Container sx={{ py: 15 }}>
          <Typography variant="h4" sx={{ mb: 5 }}>
            Related Jobs
          </Typography>
          <RelatedJob />
        </Container>
      </section>
    </div>
  );
};

export default JobDetail;

import { Box, Button, Container, Typography, Grid } from "@mui/material";
import React from "react";
import TextField from "@mui/material/TextField";
import Banner from "../../assets/img-01.png";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import ApartmentOutlinedIcon from "@mui/icons-material/ApartmentOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import SelectActionCard from "./Vacancies";
import Work from "./Work";
import Category from "./Category";
import FeaturedJob from "./FeaturedJob";
import Companies from "./Companies";
import Testimonial from "./Testimonial";

const Home = () => {
  return (
    <Box>
      <section className="banner">
        <Container sx={{ py: 15 }}>
          <Box sx={{ display: { xs: "", md: "flex" }, gap: 5 }}>
            <Box sx={{ mb: 5 }}>
              <Box>
                <Typography variant="h2" sx={{}}>
                  Find A Job That Suits Your Interest & Skills.
                </Typography>
              </Box>
              <Box sx={{ mt: 2 }}>
                <Typography>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Inventore deleniti nam repellat adipisci alias totam.
                </Typography>
              </Box>
              <Box sx={{ display: "flex", position: "relative", mt: 2 }}>
                <TextField
                  fullWidth
                  label="Job Title, Keyword"
                  id="fullWidth"
                />
                <Button
                  sx={{ position: "absolute", right: 6, my: 1, py: 1 }}
                  variant="contained"
                >
                  Search
                </Button>
              </Box>
            </Box>
            <Box>
              <img src={Banner} width="500px" alt="image" />
            </Box>
          </Box>
          <Box
            sx={{
              mt: 5,
              flexGrow: 1,
            }}
          >
            <Grid
              container
              columns={{ xs: 2, sm: 8, md: 16 }}
              spacing={{ xs: 2, md: 3 }}
            >
              <Grid item xs={2} sm={4} md={4}>
                <Box
                  variant="outlined"
                  sx={{
                    px: 5,
                    py: 2,
                    boxShadow: 2,
                    backgroundColor: "white",
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    borderRadius: 2,
                    "@media (min-width:600px)": { width: 200 },
                  }}
                >
                  <EmailOutlinedIcon sx={{ color: "#1976D2" }} />
                  <span>Live Jobs</span>
                </Box>
              </Grid>

              <Grid item xs={2} sm={4} md={4}>
                <Box
                  variant="outlined"
                  sx={{
                    px: 5,
                    py: 2,
                    boxShadow: 2,
                    backgroundColor: "white",
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    borderRadius: 2,
                    "@media (min-width:600px)": { width: 200 },
                  }}
                >
                  <ApartmentOutlinedIcon sx={{ color: "#1976D2" }} />
                  Comapnies
                </Box>
              </Grid>

              <Grid item xs={2} sm={4} md={4}>
                <Box
                  variant="outlined"
                  sx={{
                    px: 5,
                    py: 2,
                    boxShadow: 2,
                    backgroundColor: "white",
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    borderRadius: 2,
                    "@media (min-width:600px)": { width: 200 },
                  }}
                >
                  <PeopleAltOutlinedIcon sx={{ color: "#1976D2" }} />
                  Candidates
                </Box>
              </Grid>

              <Grid item xs={2} sm={4} md={4}>
                <Box
                  variant="outlined"
                  sx={{
                    px: 5,
                    py: 2,
                    boxShadow: 2,
                    backgroundColor: "white",
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    borderRadius: 2,
                    "@media (min-width:600px)": { width: 200 },
                  }}
                >
                  <WorkOutlineOutlinedIcon sx={{ color: "#1976D2" }} />
                  New Jobs
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </section>

      <section>
        <Container sx={{ py: 15 }}>
          <Typography variant="h4">Most Popular Vacancies</Typography>
          <Box sx={{ mt: 5 }}>
            <SelectActionCard />
          </Box>
        </Container>
      </section>

      <section>
        <Box sx={{ backgroundColor: "#ECF5FF", py: 15 }}>
          <Container>
            <Typography variant="h4" sx={{ textAlign: "center" }}>
              How pilot Work
            </Typography>
            <Box sx={{ mt: 5 }}>
              <Work />
            </Box>
          </Container>
        </Box>
      </section>

      <section>
        <Box sx={{ py: 15 }}>
          <Container>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Box>
                <Typography variant="h4" sx={{}}>
                  Popular Category
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Button
                  sx={{ textTransform: "none", fontWeight: "bold", gap: 1 }}
                >
                  View All
                  <ArrowForwardOutlinedIcon sx={{ color: "#1976D2" }} />
                </Button>
              </Box>
            </Box>
            <Box sx={{ mt: 5 }}>
              <Category />
            </Box>
          </Container>
        </Box>
      </section>

      <section>
        <Box sx={{ py: 15, backgroundColor: "#ECF5FF" }}>
          <Container>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Box>
                <Typography variant="h4" sx={{}}>
                  Featured Job
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Button
                  sx={{ textTransform: "none", fontWeight: "bold", gap: 1 }}
                >
                  View All
                  <ArrowForwardOutlinedIcon sx={{ color: "#1976D2" }} />
                </Button>
              </Box>
            </Box>
            <Box sx={{ mt: 5 }}>
              <FeaturedJob />
            </Box>
          </Container>
        </Box>
      </section>

      <section>
        <Box sx={{ py: 15 }}>
          <Container>
            <Typography variant="h4">Top Companies</Typography>
            <Box sx={{ mt: 5 }}>
              <Companies />
            </Box>
          </Container>
        </Box>
      </section>

      <section>
        <Box sx={{ py: 15, backgroundColor: "#ECF5FF" }}>
          <Container>
            <Typography variant="h4" sx={{ textAlign: "center" }}>
              Clients Testimonial
            </Typography>
            <Box sx={{ mt: 5 }}>
              <Testimonial />
            </Box>
          </Container>
        </Box>
      </section>
    </Box>
  );
};

export default Home;

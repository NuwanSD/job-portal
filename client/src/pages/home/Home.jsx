import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";

import Banner from "../../assets/img-01.png";
import SelectActionCard from "./Vacancies";
import Work from "./Work";
import Category from "./Category";
import FeaturedJob from "./FeaturedJob";
import Companies from "./Companies";
import Testimonial from "./Testimonial";
import BottomCard from "./BottomCard";
import BannerCards from "./BannerCards";
import SearchField from "./SearchField";

const Home = () => {
  return (
    <Box>
      <section className="banner">
        <Container sx={{ py: 15 }}>
          <Box sx={{ display: { xs: "", md: "flex" }, gap: 5 }}>
            <Box sx={{ mb: 5 }}>
              <Box>
                <Typography variant="h2" sx={{ fontWeight: "medium" }}>
                  Find A Job That Suits Your Interest & Skills.
                </Typography>
              </Box>
              <Box sx={{ mt: 2 }}>
                <Typography>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Inventore deleniti nam repellat adipisci alias totam.
                </Typography>
              </Box>
              <Box sx={{ display: "flex", mt: 2 }}>
                <SearchField />
              </Box>
            </Box>
            <Box>
              <img src={Banner} width="500px" alt="image" />
            </Box>
          </Box>
          <Box sx={{ mt: 5 }}>
            <BannerCards />
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
        <Box sx={{ backgroundColor: "#f7f7f8", py: 15 }}>
          <Container>
            <Typography variant="h4" sx={{ textAlign: "center" }}>
              How JobSpotlight Work
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
              <Button
                LinkComponent="a"
                href="/job"
                sx={{ textTransform: "none", fontWeight: "bold" }}
                endIcon={<ArrowForwardOutlinedIcon sx={{ color: "#1976D2" }} />}
              >
                View All
              </Button>
            </Box>
            <Box sx={{ mt: 5 }}>
              <Category />
            </Box>
          </Container>
        </Box>
      </section>

      <section>
        <Box sx={{ py: 15, backgroundColor: "#f7f7f8" }}>
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
              <Button
                LinkComponent="a"
                href="/job"
                sx={{
                  textTransform: "none",
                  fontWeight: "bold",
                }}
                endIcon={<ArrowForwardOutlinedIcon sx={{ color: "#1976D2" }} />}
              >
                View All
              </Button>
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
        <Box sx={{ py: 15, backgroundColor: "#f7f7f8" }}>
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

      <section>
        <Box sx={{ py: 15 }}>
          <Container>
            <BottomCard />
          </Container>
        </Box>
      </section>
    </Box>
  );
};

export default Home;

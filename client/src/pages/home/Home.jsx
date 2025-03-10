import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";

import Banner from "../../assets/img-04.jpg";
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
                  Find your dream job or hire the best talent with our smart
                  matching system. Start your career journey today!
                </Typography>
              </Box>
              <Box sx={{ display: "flex", mt: 2 }}>
                <SearchField />
              </Box>
            </Box>
            <Box>
              <img
                src={Banner}
                width="500px"
                alt="image"
                style={{ borderRadius: "12px" }}
              />
            </Box>
          </Box>
          <Box sx={{ mt: 10 }}>
            <BannerCards />
          </Box>
        </Container>
      </section>

      <section>
        <Container sx={{ py: 15 }}>
          <Typography variant="h4" sx={{ fontWeight: "medium" }}>
            Most Popular Vacancies
          </Typography>
          <Box sx={{ mt: 8 }}>
            <SelectActionCard />
          </Box>
        </Container>
      </section>

      <section>
        <Box sx={{ backgroundColor: "#15181b", py: 15 }}>
          <Container>
            <Typography
              variant="h4"
              sx={{ textAlign: "center", fontWeight: "medium", color: "#fff" }}
            >
              How Do We Work
            </Typography>
            <Box sx={{ mt: 8 }}>
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
                <Typography variant="h4" sx={{ fontWeight: "medium" }}>
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
            <Box sx={{ mt: 8 }}>
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
                <Typography variant="h4" sx={{ fontWeight: "medium" }}>
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
            <Box sx={{ mt: 8 }}>
              <FeaturedJob />
            </Box>
          </Container>
        </Box>
      </section>

      <section>
        <Box sx={{ py: 15 }}>
          <Container>
            <Typography variant="h4" sx={{ fontWeight: "medium" }}>
              Top Companies
            </Typography>
            <Box sx={{ mt: 8 }}>
              <Companies />
            </Box>
          </Container>
        </Box>
      </section>

      <section>
        <Box sx={{ py: 15, backgroundColor: "#f7f7f8" }}>
          <Container>
            <Typography
              variant="h4"
              sx={{ textAlign: "center", fontWeight: "medium" }}
            >
              Clients Testimonial
            </Typography>
            <Box sx={{ mt: 8 }}>
              <Testimonial />
            </Box>
          </Container>
        </Box>
      </section>

      <section>
        <Box sx={{ py: 15 }}>
          <Container>
            <Typography variant="h4" sx={{ fontWeight: "medium" }}>
              Join to the Community
            </Typography>
            <Box sx={{ mt: 8 }}>
              <BottomCard />
            </Box>
          </Container>
        </Box>
      </section>
    </Box>
  );
};

export default Home;

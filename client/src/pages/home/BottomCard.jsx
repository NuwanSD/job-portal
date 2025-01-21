import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import Button from "@mui/material/Button";

import Image01 from "../../assets/img-02.jpg";
import Image02 from "../../assets/banner-img.jpg";

export default function BottomCard() {
  return (
    <Box sx={{ display: { xs: "row", md: "flex" }, gap: 2 }}>
      <Card sx={{ display: "flex" }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h5">
              Become a Candidate
            </Typography>
            <Typography
              variant="subtitle1"
              component="div"
              sx={{ color: "text.secondary" }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
              fuga.
            </Typography>
            <Button
              variant="contained"
              sx={{ mt: 2, textTransform: "none", gap: 1 }}
            >
              Register Now <ArrowForwardOutlinedIcon />
            </Button>
          </CardContent>
        </Box>
        <CardMedia
          component="img"
          sx={{ width: 250 }}
          image={Image01}
          alt="Live from space album cover"
        />
      </Card>
      <Card sx={{ display: "flex" }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h5">
              Become a Employers
            </Typography>
            <Typography
              variant="subtitle1"
              component="div"
              sx={{ color: "text.secondary" }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
              fuga.
            </Typography>
            <Button
              variant="contained"
              sx={{ mt: 2, textTransform: "none", gap: 1 }}
            >
              Register Now <ArrowForwardOutlinedIcon />
            </Button>
          </CardContent>
        </Box>
        <CardMedia
          component="img"
          sx={{ width: 250 }}
          image={Image02}
          alt="Live from space album cover"
        />
      </Card>
    </Box>
  );
}

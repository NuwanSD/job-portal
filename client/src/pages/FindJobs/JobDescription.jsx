import { Box, Typography, Button } from "@mui/material";
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import TimerOutlinedIcon from "@mui/icons-material/TimerOutlined";
import LayersOutlinedIcon from "@mui/icons-material/LayersOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import AttachFileOutlinedIcon from "@mui/icons-material/AttachFileOutlined";

const JobDescription = ({ postedJob }) => {
  console.log(postedJob);
  return (
    <Box
      sx={{
        display: { xs: "row", md: "flex" },
        justifyContent: "space-between",
        gap: 4,
      }}
    >
      <Box sx={{ mb: { xs: 5 } }}>
        <Typography variant="h6" sx={{ textAlign: "left" }}>
          Job Description
        </Typography>
        <Typography sx={{ mt: 2 }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, illum!
        </Typography>
        <Typography sx={{ mt: 2 }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, eos
          eveniet minus sit fuga nam, aliquid ducimus natus voluptatibus
          architecto quia repellat dolor commodi esse saepe incidunt ut cum
          obcaecati. Libero aliquam illum iure laudantium. Laboriosam ad iusto
          qui amet dolore voluptatum, non cupiditate, exercitationem saepe magni
          in itaque porro?
        </Typography>
        <Typography sx={{ mt: 2 }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat magni
          sunt cum tempore ex, magnam vel, necessitatibus officia facilis amet
          eos similique aut nisi, vitae tempora labore error? Eaque tempore vero
          doloremque impedit maxime aperiam quaerat cupiditate voluptatum
          obcaecati voluptatibus perferendis totam, aliquam dolores ut eius odio
          suscipit, enim deleniti, eum numquam ducimus! Quasi velit inventore
          culpa necessitatibus dicta. Optio ad laboriosam voluptatum incidunt.
          Adipisci natus quaerat aliquid laboriosam voluptatum molestias quos
          corporis, architecto beatae officia quam soluta quasi. Quos?
        </Typography>
        <Typography sx={{ mt: 2 }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, illum!
        </Typography>
        <Typography sx={{ mt: 2, mb: 2 }}>Requirements</Typography>
        <ul>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
            non?
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
            non?
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
            non?
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
            non?
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
            non?
          </li>
        </ul>
        <Typography sx={{ mt: 2, mb: 2 }}>Desirable:</Typography>
        <ul>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
            non?
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
            non?
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
            non?
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
            non?
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
            non?
          </li>
        </ul>
        <Typography sx={{ mt: 2, mb: 2 }}>Benefits</Typography>
        <ul>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
            non?
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
            non?
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
            non?
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
            non?
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
            non?
          </li>
        </ul>
      </Box>
      <Box>
        <Card
          variant="outlined"
          sx={{ display: "flex", justifyContent: "center", width: "400px" }}
        >
          <CardContent
            sx={{ alignContent: "center", textAlign: "center", width: "200px" }}
          >
            <Typography variant="h6">Salary (USD)</Typography>
            <Typography color="primary">$1000,000- $120,000</Typography>
            <Typography color="textSecondary">Yearly salary</Typography>
          </CardContent>

          <Divider orientation="vertical" variant="middle" flexItem />

          <CardContent
            sx={{
              alignContent: "center",
              textAlign: "center",
              justifyItems: "center",
              width: "200px",
            }}
          >
            <MapOutlinedIcon sx={{ color: "blue", display: "block" }} />
            <Typography variant="h6">Job Location</Typography>
            <Typography color="textSecondary">Perth, Australia</Typography>
          </CardContent>
        </Card>

        <Card variant="outlined" sx={{ mt: 2, width: "400px" }}>
          <CardContent>
            <Typography variant="h6">Job Benefits</Typography>
            <Box
              sx={{
                mt: 2,
                display: "grid",
                gridTemplateColumns:
                  "repeat(auto-fill, minmax(min(100px, 100%), 1fr))",
                gap: 1,
              }}
            >
              <Typography>Lorem ipsum</Typography>
              <Typography>Lorem ipsum</Typography>
              <Typography>Lorem ipsum</Typography>
              <Typography>Lorem ipsum</Typography>
              <Typography>Lorem ipsum</Typography>
            </Box>
          </CardContent>
        </Card>

        <Card variant="outlined" sx={{ mt: 2, width: "400px" }}>
          <CardContent>
            <Typography variant="h6">Job Overview</Typography>
            <Box
              sx={{
                mt: 2,
                display: "grid",
                gridTemplateColumns:
                  "repeat(auto-fill, minmax(min(100px, 100%), 1fr))",
                gap: 2,
              }}
            >
              <Box>
                <CalendarMonthOutlinedIcon />
                <Typography color="textSecondary">JOB POSTED</Typography>
                <Typography sx={{ fontWeight: "bold" }}>
                  14 Jun, 2025
                </Typography>
              </Box>
              <Typography>
                <TimerOutlinedIcon />
                <Typography color="textSecondary">JOB EXPIRE IN:</Typography>
                <Typography sx={{ fontWeight: "bold" }}>
                  14 Jun, 2025
                </Typography>
              </Typography>
              <Typography>
                <LayersOutlinedIcon />
                <Typography color="textSecondary">JOB LEVEL:</Typography>
                <Typography sx={{ fontWeight: "bold" }}>Entry Level</Typography>
              </Typography>
              <Typography>
                <AttachMoneyOutlinedIcon />
                <Typography color="textSecondary">SALARY</Typography>
                <Typography sx={{ fontWeight: "bold" }}>
                  $50K-80K/Mon
                </Typography>
              </Typography>
              <Typography>
                <SchoolOutlinedIcon />
                <Typography color="textSecondary">EXPERIENCE:</Typography>
                <Typography sx={{ fontWeight: "bold" }}>Graduation</Typography>
              </Typography>
            </Box>
          </CardContent>
        </Card>

        <Card variant="outlined" sx={{ mt: 2, width: "400px" }}>
          <CardContent>
            <Typography variant="h6">Share this job:</Typography>
            <Box sx={{ mt: 2, mb: 2 }}>
              <Button
                variant="outlined"
                sx={{ bgcolor: "#e6f0ff", display: "flex", gap: 1 }}
              >
                <AttachFileOutlinedIcon /> Copy Link
              </Button>
            </Box>
            <Typography>Job Tags:</Typography>
            <Box
              sx={{
                mt: 2,
                display: "grid",
                gridTemplateColumns:
                  "repeat(auto-fill, minmax(min(80px, 100%), 1fr))",
                gap: 1,
              }}
            >
              <Typography
                sx={{
                  bgcolor: "#e6f0ff",
                  display: "inline",
                  textAlign: "center",
                  border: 1,
                  borderRadius: 1,
                }}
              >
                PHP
              </Typography>
              <Typography
                sx={{
                  bgcolor: "#e6f0ff",
                  display: "inline",
                  textAlign: "center",
                  border: 1,
                  borderRadius: 1,
                }}
              >
                React
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default JobDescription;

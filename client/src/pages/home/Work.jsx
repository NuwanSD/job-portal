import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
import ZoomInOutlinedIcon from "@mui/icons-material/ZoomInOutlined";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";

const cards = [
  {
    id: 1,
    icon: <PersonAddAltOutlinedIcon sx={{ scale: 1.5, mb: 2 }} />,
    title: "Create Account",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit",
  },
  {
    id: 2,
    icon: <CloudUploadOutlinedIcon sx={{ scale: 1.5, mb: 2 }} />,
    title: "Upload Resume",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit",
  },
  {
    id: 3,
    icon: <ZoomInOutlinedIcon sx={{ scale: 1.5, mb: 2 }} />,
    title: "Find Suitable Job",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit",
  },
  {
    id: 4,
    icon: <VerifiedOutlinedIcon sx={{ scale: 1.5, mb: 2 }} />,
    title: "Apply Job",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit",
  },
];

function Work() {
  return (
    <Box
      sx={{
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(min(250px, 100%), 1fr))",
        gap: 3,
      }}
    >
      {cards.map((card) => (
        <Card
          key={card.id}
          sx={{ background: "#1976D2", color: "#fff" }}
          variant="outlined"
        >
          <CardContent
            sx={{ height: "100%", py: 3, textAlign: "center", color: "#fff" }}
          >
            {card.icon}
            <Typography variant="h6" component="div">
              {card.title}
            </Typography>
            <Typography variant="body2" sx={{ my: 1 }}>
              {card.description}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}

export default Work;

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
    icon: <PersonAddAltOutlinedIcon sx={{ color: "#1976D2" }} />,
    title: "Plants",
    description: "Plants are essential for all life.",
  },
  {
    id: 2,
    icon: <CloudUploadOutlinedIcon sx={{ color: "#1976D2" }} />,
    title: "Animals",
    description: "Animals are a part of nature.",
  },
  {
    id: 3,
    icon: <ZoomInOutlinedIcon sx={{ color: "#1976D2" }} />,
    title: "Humans",
    description: "Humans depend on plants and animals for survival.",
  },
  {
    id: 4,
    icon: <VerifiedOutlinedIcon sx={{ color: "#1976D2" }} />,
    title: "Humans",
    description: "Humans depend on plants and animals for survival.",
  },
];

function Work() {
  return (
    <Box
      sx={{
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(min(200px, 100%), 1fr))",
        gap: 5,
      }}
    >
      {cards.map((card) => (
        <Card>
          <CardContent sx={{ height: "100%", textAlign: "center" }}>
            {card.icon}
            <Typography variant="h6" component="div">
              {card.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {card.description}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}

export default Work;

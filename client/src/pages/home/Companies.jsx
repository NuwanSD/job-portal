import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
import ZoomInOutlinedIcon from "@mui/icons-material/ZoomInOutlined";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import { Button } from "@mui/material";

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
    title: "Nature",
    description: "Nature provides us with everything we need.",
  },
  {
    id: 5,
    icon: <VerifiedOutlinedIcon sx={{ color: "#1976D2" }} />,
    title: "Water",
    description: "Water is essential for life.",
  },
  {
    id: 6,
    icon: <VerifiedOutlinedIcon sx={{ color: "#1976D2" }} />,
    title: "Earth",
    description: "The Earth is our home.",
  },
  {
    id: 7,
    icon: <VerifiedOutlinedIcon sx={{ color: "#1976D2" }} />,
    title: "Air",
    description: "Clean air is vital for health.",
  },
  {
    id: 8,
    icon: <VerifiedOutlinedIcon sx={{ color: "#1976D2" }} />,
    title: "Sun",
    description: "The sun provides energy for life.",
  },
];

function Companies() {
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
        <Card key={card.id} variant="outlined" sx={{ borderRadius: 2 }}>
          <CardContent sx={{ height: "100%" }}>
            <Box sx={{ display: "flex", gap: 1 }}>
              <Box sx={{ backgroundColor: "#ECF5FF", p: 2 }}>{card.icon}</Box>
              <Box>
                <Typography variant="h6" component="div">
                  {card.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {card.description}
                </Typography>
              </Box>
            </Box>
            <Button variant="contained" sx={{ mt: 2, width: "100%" }}>
              Open Position
            </Button>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}

export default Companies;

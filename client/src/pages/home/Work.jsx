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
    icon: (
      <PersonAddAltOutlinedIcon sx={{ color: "#1976D2", scale: 1.5, mb: 1 }} />
    ),
    title: "Create account",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit",
  },
  {
    id: 2,
    icon: (
      <CloudUploadOutlinedIcon sx={{ color: "#1976D2", scale: 1.5, mb: 1 }} />
    ),
    title: "Upload CV/Resume",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit",
  },
  {
    id: 3,
    icon: <ZoomInOutlinedIcon sx={{ color: "#1976D2", scale: 1.5, mb: 1 }} />,
    title: "Find suitable job",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit",
  },
  {
    id: 4,
    icon: <VerifiedOutlinedIcon sx={{ color: "#1976D2", scale: 1.5, mb: 1 }} />,
    title: "Apply job",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit",
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
        <Card key={card.id}>
          <CardContent sx={{ height: "100%", textAlign: "center" }}>
            {card.icon}
            <Typography variant="h6" component="div">
              {card.title}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
              {card.description}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}

export default Work;

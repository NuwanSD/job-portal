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
    description: "157 Open Position",
  },
  {
    id: 2,
    icon: <CloudUploadOutlinedIcon sx={{ color: "#1976D2" }} />,
    title: "Animals",
    description: "157 Open Position",
  },
  {
    id: 3,
    icon: <ZoomInOutlinedIcon sx={{ color: "#1976D2" }} />,
    title: "Humans",
    description: "157 Open Position",
  },
  {
    id: 4,
    icon: <VerifiedOutlinedIcon sx={{ color: "#1976D2" }} />,
    title: "Nature",
    description: "157 Open Position",
  },
  {
    id: 5,
    icon: <VerifiedOutlinedIcon sx={{ color: "#1976D2" }} />,
    title: "Water",
    description: "157 Open Position",
  },
  {
    id: 6,
    icon: <VerifiedOutlinedIcon sx={{ color: "#1976D2" }} />,
    title: "Earth",
    description: "157 Open Position",
  },
  {
    id: 7,
    icon: <VerifiedOutlinedIcon sx={{ color: "#1976D2" }} />,
    title: "Air",
    description: "157 Open Position",
  },
  {
    id: 8,
    icon: <VerifiedOutlinedIcon sx={{ color: "#1976D2" }} />,
    title: "Sun",
    description: "157 Open Position",
  },
];

function Category() {
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
        <Card key={card.id} sx={{ boxShadow: "none" }}>
          <CardContent
            sx={{
              height: "100%",
              display: "flex",
              gap: 2,
              alignItems: "center",
            }}
          >
            <Box sx={{ backgroundColor: "#f7f7f8", p: 1.5 }}>{card.icon}</Box>
            <Box>
              <Typography variant="h6" component="div">
                {card.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {card.description}
              </Typography>
            </Box>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}

export default Category;

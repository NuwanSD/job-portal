import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
import ZoomInOutlinedIcon from "@mui/icons-material/ZoomInOutlined";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";

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

function FeaturedJob() {
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
        <Card key={card.id} sx={{}}>
          <CardContent sx={{ height: "100%" }}>
            <Box>
              <Typography variant="h6" component="div">
                {card.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {card.description}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                mt: 4,
              }}
            >
              <Box sx={{ display: "flex", alignContent: "center", gap: 2 }}>
                {card.icon}
                <Typography>Google Inc</Typography>
              </Box>
              <Box>
                <BookmarkBorderOutlinedIcon sx={{ color: "#1976D2" }} />
              </Box>
            </Box>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}

export default FeaturedJob;

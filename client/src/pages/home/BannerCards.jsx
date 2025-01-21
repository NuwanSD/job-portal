import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import ApartmentOutlinedIcon from "@mui/icons-material/ApartmentOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";

const cards = [
  {
    id: 1,
    icon: <WorkOutlineOutlinedIcon sx={{ color: "#1976D2", scale: 2 }} />,
    title: "172,453",
    description: "Live Job",
  },
  {
    id: 2,
    icon: <ApartmentOutlinedIcon sx={{ color: "#1976D2", scale: 2 }} />,
    title: "97,250",
    description: "Companies",
  },
  {
    id: 3,
    icon: <PeopleAltOutlinedIcon sx={{ color: "#1976D2", scale: 2 }} />,
    title: "372,456",
    description: "Candidates",
  },
  {
    id: 4,
    icon: <WorkOutlineOutlinedIcon sx={{ color: "#1976D2", scale: 2 }} />,
    title: "7,532",
    description: "New Job",
  },
];

function BannerCards() {
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
        <Card variant="outlined">
          <CardContent sx={{ display: "flex", gap: 2, alignItems: "center" }}>
            <Box sx={{ bgcolor: "#f7f7f8", p: 2 }}>{card.icon}</Box>
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

export default BannerCards;

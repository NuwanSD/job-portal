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
    icon: <WorkOutlineOutlinedIcon sx={{ color: "#fff", scale: 2 }} />,
    title: "172,453",
    description: "Live Job",
  },
  {
    id: 2,
    icon: <ApartmentOutlinedIcon sx={{ color: "#fff", scale: 2 }} />,
    title: "97,250",
    description: "Companies",
  },
  {
    id: 3,
    icon: <PeopleAltOutlinedIcon sx={{ color: "#fff", scale: 2 }} />,
    title: "372,456",
    description: "Candidates",
  },
  {
    id: 4,
    icon: <WorkOutlineOutlinedIcon sx={{ color: "#fff", scale: 2 }} />,
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
        gridTemplateColumns: "repeat(auto-fill, minmax(min(250px, 100%), 1fr))",
        gap: 4,
      }}
    >
      {cards.map((card) => (
        <Card
          key={card.id}
          variant="outlined"
          sx={{ backgroundColor: "#15181b", boxShadow: 2 }}
        >
          <CardContent sx={{ display: "flex", gap: 2, alignItems: "center" }}>
            <Box sx={{ px: 2 }}>{card.icon}</Box>
            <Box sx={{ color: "white" }}>
              <Typography variant="h6" component="div">
                {card.title}
              </Typography>
              <Typography variant="subtitle2">{card.description}</Typography>
            </Box>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}

export default BannerCards;

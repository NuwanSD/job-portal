import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import { Button } from "@mui/material";

const cards = [
  {
    id: 1,
    icon: <VerifiedOutlinedIcon sx={{ color: "#1976D2" }} />,
    title: "Software Engineer",
    type: "FULL-TIME",
    salary: "Salary: $20,000 - $25,000",
    company: "Google",
  },
  {
    id: 2,
    icon: <VerifiedOutlinedIcon sx={{ color: "#1976D2" }} />,
    title: "Data Analyst",
    type: "PART-TIME",
    salary: "Salary: $20,000 - $25,000",
    company: "Facebook",
  },
  {
    id: 3,
    icon: <VerifiedOutlinedIcon sx={{ color: "#1976D2" }} />,
    title: "Product Manager",
    type: "FULL-TIME",
    salary: "Salary: $20,000 - $25,000",
    company: "Amazon",
  },
  {
    id: 4,
    icon: <VerifiedOutlinedIcon sx={{ color: "#1976D2" }} />,
    title: "UX Designer",
    type: "PART-TIME",
    salary: "Salary: $20,000 - $25,000",
    company: "Apple",
  },
  {
    id: 5,
    icon: <VerifiedOutlinedIcon sx={{ color: "#1976D2" }} />,
    title: "DevOps Engineer",
    type: "PART-TIME",
    salary: "Salary: $20,000 - $25,000",
    company: "Microsoft",
  },
  {
    id: 6,
    icon: <VerifiedOutlinedIcon sx={{ color: "#1976D2" }} />,
    title: "Marketing Specialist",
    type: "INTERNSHIP",
    salary: "Salary: $20,000 - $25,000",
    company: "Netflix",
  },
  {
    id: 7,
    icon: <VerifiedOutlinedIcon sx={{ color: "#1976D2" }} />,
    title: "Cybersecurity Analyst",
    type: "PART-TIME",
    salary: "Salary: $20,000 - $25,000",
    company: "IBM",
  },
  {
    id: 8,
    icon: <VerifiedOutlinedIcon sx={{ color: "#1976D2" }} />,
    title: "Customer Manager",
    type: "PART-TIME",
    salary: "Salary: $20,000 - $25,000",
    company: "Salesforce",
  },
  {
    id: 9,
    icon: <VerifiedOutlinedIcon sx={{ color: "#1976D2" }} />,
    title: "Customer Manager",
    type: "PART-TIME",
    salary: "Salary: $20,000 - $25,000",
    company: "Salesforce",
  },
];

function FeaturedJob() {
  return (
    <Box
      sx={{
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(min(350px, 100%), 1fr))",
        gap: 2,
      }}
    >
      {cards.map((card) => (
        <Card key={card.id} sx={{ width: "100%" }} variant="outlined">
          <CardActionArea LinkComponent="a" href={`/job/${card.id}`}>
            <CardContent sx={{ height: "100%" }}>
              <Box>
                <Typography variant="h6" component="div">
                  {card.title}
                </Typography>
                <Box sx={{ display: "flex", gap: 1 }}>
                  <Box
                    sx={{
                      bgcolor: "#1976D2",
                      color: "white",
                      fontSize: "10px",
                      fontWeight: "bold",
                      alignContent: "center",
                      px: 1,
                      borderRadius: 1,
                    }}
                  >
                    {card.type}
                  </Box>
                  <Typography variant="body2" color="text.secondary">
                    {card.salary}
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{ mt: 4, display: "flex", alignContent: "center", gap: 2 }}
              >
                {card.icon}
                <Typography>Google Inc</Typography>
              </Box>
            </CardContent>
          </CardActionArea>

          <CardActions
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Button size="small" color="primary">
              LEARN MORE
            </Button>
            <Button LinkComponent="a" href="/job">
              <BookmarkBorderOutlinedIcon sx={{ color: "#1976D2" }} />
            </Button>
          </CardActions>
        </Card>
      ))}
    </Box>
  );
}

export default FeaturedJob;

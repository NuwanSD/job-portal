import React from "react";
import { Box, Button, Card } from "@mui/material";
import { CardContent } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import { Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";

const candidates = [
  {
    id: 1,
    imageURL: "",
    name: "Cody Fisher",
    status: "Software Engineer",
    location: "New York",
  },
  {
    id: 2,
    imageURL: "",
    name: "Alex Johnson",
    status: "Data Scientist",
    location: "San Francisco",
  },
  {
    id: 3,
    imageURL: "",
    name: "Morgan Smith",
    status: "Product Manager",
    location: "Austin",
  },
  {
    id: 4,
    imageURL: "",
    name: "Jordan Taylor",
    status: "UX Designer",
    location: "Chicago",
  },
  {
    id: 5,
    imageURL: "",
    name: "Riley Martinez",
    status: "DevOps Engineer",
    location: "Boston",
  },
  {
    id: 6,
    imageURL: "",
    name: "Casey Brown",
    status: "QA Engineer",
    location: "Denver",
  },
  {
    id: 7,
    imageURL: "",
    name: "Jessie Lee",
    status: "Business Analyst",
    location: "Seattle",
  },
  {
    id: 8,
    imageURL: "",
    name: "Jamie Walker",
    status: "Security Specialist",
    location: "Miami",
  },
  {
    id: 9,
    imageURL: "",
    name: "Parker Davis",
    status: "Technical Writer",
    location: "Los Angeles",
  },
  {
    id: 10,
    imageURL: "",
    name: "Charlie Evans",
    status: "Database Administrator",
    location: "Atlanta",
  },
  {
    id: 11,
    imageURL: "",
    name: "Taylor Reed",
    status: "AI Researcher",
    location: "New York",
  },
];

const CandidateList = () => {
  return (
    <div>
      <Box>
        {candidates.map((candidate) => (
          <Card
            key={candidate.id}
            variant="outlined"
            sx={{ mt: 2, display: "flex", justifyContent: "space-between" }}
          >
            <CardContent sx={{ display: "flex", gap: 2, alignItems: "center" }}>
              <Avatar
                alt="Cody Fisher"
                variant="square"
                src={candidate.imageURL}
                sx={{ width: 82, height: 82, borderRadius: 1 }}
              />
              <Box>
                <Typography variant="h6">{candidate.name}</Typography>
                <Typography color="textSecondary">
                  {candidate.status}
                </Typography>
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: 1, mt: 1 }}
                >
                  <FmdGoodOutlinedIcon color="" />
                  <Typography color="textSecondary">
                    {candidate.location}
                  </Typography>
                </Box>
              </Box>
            </CardContent>
            <CardActions>
              <BookmarkBorderOutlinedIcon />
              <Button
                LinkComponent="a"
                href={`/candidate/${candidate.id}`}
                variant="outlined"
                endIcon={<ArrowForwardIcon />}
              >
                View Profile
              </Button>
            </CardActions>
          </Card>
        ))}
      </Box>
    </div>
  );
};

export default CandidateList;

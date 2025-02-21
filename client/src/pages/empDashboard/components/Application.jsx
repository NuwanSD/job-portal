import {
  Box,
  Button,
  Typography,
  Card,
  CardContent,
  CardActionArea,
  CardActions,
  Divider,
  Avatar,
  List,
  ListItem,
  ListItemText,
  Link,
} from "@mui/material";
import React from "react";
import Profile from "../../../assets/user.png";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";

const candidates = [
  {
    id: 1,
    imageURL: Profile,
    name: "Cody Fisher",
    status: "Software Engineer",
    location: "New York",
  },
  {
    id: 2,
    imageURL: Profile,
    name: "Alex Johnson",
    status: "Data Scientist",
    location: "San Francisco",
  },
  {
    id: 3,
    imageURL: Profile,
    name: "Morgan Smith",
    status: "Product Manager",
    location: "Austin",
  },
  {
    id: 4,
    imageURL: Profile,
    name: "Jordan Taylor",
    status: "UX Designer",
    location: "Chicago",
  },
  {
    id: 5,
    imageURL: Profile,
    name: "Riley Martinez",
    status: "DevOps Engineer",
    location: "Boston",
  },
  {
    id: 6,
    imageURL: Profile,
    name: "Casey Brown",
    status: "QA Engineer",
    location: "Denver",
  },
];

const Application = () => {
  return (
    <Box sx={{ py: 8 }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mb: 5,
        }}
      >
        <Typography variant="h6" gutterBottom>
          Job Applications
        </Typography>
        <Box sx={{ display: "flex", gap: 1 }}>
          <Button variant="contained">Filter</Button>
          <Button variant="outlined">Sort</Button>
        </Box>
      </Box>

      <Box
        sx={{
          width: "100%",
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fill, minmax(min(250px, 100%), 1fr))",
          gap: 3,
        }}
      >
        {candidates.map((candidate) => (
          <Card variant="outlined">
            <CardContent>
              <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                <Avatar src={candidate.imageURL} />
                <Box>
                  <Typography variant="h6">{candidate.name}</Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {candidate.status}
                  </Typography>
                </Box>
              </Box>
              <Divider sx={{ py: 1 }} />
              <Box>
                <List>
                  <ListItem disablePadding>
                    <ListItemText
                      primary={
                        <Typography sx={{ color: "text.secondary" }}>
                          7 Years Experience
                        </Typography>
                      }
                    />
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemText
                      primary={
                        <Typography sx={{ color: "text.secondary" }}>
                          Education: Master Degree
                        </Typography>
                      }
                    />
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemText
                      primary={
                        <Typography sx={{ color: "text.secondary" }}>
                          Applied: Jan 23, 2022
                        </Typography>
                      }
                    />
                  </ListItem>
                </List>
              </Box>
              <Link
                href="#"
                underline="none"
                sx={{ display: "flex", gap: 1, alignItems: "center" }}
              >
                <FileDownloadOutlinedIcon />
                Download Resume
              </Link>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default Application;

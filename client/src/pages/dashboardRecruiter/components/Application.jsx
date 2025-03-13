import {
  Box,
  Button,
  Typography,
  Card,
  CardContent,
  Divider,
  Avatar,
  List,
  ListItem,
  ListItemText,
  Link,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Profile from "../../../assets/user.png";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import { getAllPostedJob } from "../../../helper/postedJob";
import { getAllAppliedJob } from "../../../helper/appliedJob";
import { getAllUsers } from "../../../helper/helper";
import { getAllJobSeekers } from "../../../helper/jobSeeker";

const Application = ({ user_id }) => {
  const [applicants, setApplicants] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const allPostedJobs = await getAllPostedJob();
        const allAppliedJobs = await getAllAppliedJob();
        const allUsers = await getAllUsers();
        const allJobSeekers = await getAllJobSeekers();

        const filteredPostedJobs = allPostedJobs.data.filter(
          (p) => p.user_id === user_id
        );

        //filtered users by looking at appliedJobs
        const applications = filteredPostedJobs.flatMap((u) =>
          allAppliedJobs.data.filter((a) => a.posted_job_id === u.posted_job_id)
        );

        const userData = applications.map((a) => {
          const users = allUsers.data.find((u) => u.user_id === a.user_id);
          const userDetails = allJobSeekers.data.find(
            (d) => d.user_id === a.user_id
          );

          return {
            user_id: users.user_id,
            name: users.name,
            applied_date: a.applied_date,
            description: userDetails.description,
            experience: userDetails.experience,
            education: userDetails.education,
            photo_url: userDetails.photo_url,
            status: userDetails.status,
          };
        });

        setApplicants(userData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [user_id]);

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
        {applicants.map((user) => (
          <Card variant="outlined" key={user.user_id}>
            <CardContent>
              <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                <Avatar src={user.photo_url} />
                <Box>
                  <Typography variant="h6">{user.name}</Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {user.description}
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
                          Experience: {user.experience}
                        </Typography>
                      }
                    />
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemText
                      primary={
                        <Typography sx={{ color: "text.secondary" }}>
                          Education: {user.education}
                        </Typography>
                      }
                    />
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemText
                      primary={
                        <Typography sx={{ color: "text.secondary" }}>
                          Applied: {user.applied_date}
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

import React, { useEffect, useState } from "react";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import { Button } from "@mui/material";

import { getAllPostedJob } from "../../helper/postedJob";
import { getAllUsers } from "../../helper/helper";
import { getAllJobs } from "../../helper/job";

function FeaturedJob() {
  const [postedJob, setPostedJobs] = useState([]);
  const [user, setUsers] = useState([]);
  const [job, setJobs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const postedJobs = await getAllPostedJob();
        const users = await getAllUsers();
        const jobs = await getAllJobs();

        const modifiedJobs = postedJobs.data.map((job) => {
          const userMatch = users.data.find((u) => u.user_id === job.user_id);
          const jobMatch = jobs.data.find((j) => j.job_id === job.job_id);
          return {
            ...job,
            company_name: userMatch ? userMatch.name : "Unknown",
            job_title: jobMatch ? jobMatch.title : "Unknown",
          };
        });

        setPostedJobs(modifiedJobs);
        setUsers(users.data);
        setJobs(jobs);
      } catch (error) {
        console.log(response);
      }
    };

    fetchData();
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(min(350px, 100%), 1fr))",
        gap: 2,
      }}
    >
      {postedJob.map((job) => (
        <Card key={job.posted_job_id} sx={{ width: "100%" }} variant="outlined">
          <CardActionArea LinkComponent="a" href={`/job/${job.posted_job_id}`}>
            <CardContent sx={{ height: "100%" }}>
              <Box>
                <Typography variant="h6" component="div">
                  {job.job_title}
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
                    {job.job_type}
                  </Box>
                  <Typography variant="body2" color="text.secondary">
                    {job.salary}
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{ mt: 4, display: "flex", alignContent: "center", gap: 2 }}
              >
                <VerifiedOutlinedIcon sx={{ color: "#1976D2" }} />
                <Typography>{job.company_name}</Typography>
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

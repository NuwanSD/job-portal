import React, { useState, useEffect } from "react";
import { Box, Button, Card } from "@mui/material";
import { CardContent } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import { Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import Icon from "../../../assets/facebook.svg";
import Pagination from "@mui/material/Pagination";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { getAllJobs } from "../../../helper/job";
import { getAllPostedJob } from "../../../helper/postedJob";

const FavoriteJobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const postedJobs = await getAllPostedJob();
        const jobs = await getAllJobs();

        const jobMapping = postedJobs.data.map((d) => {
          const jobMatch = jobs.data.find((j) => j.job_id === d.job_id);

          return {
            ...d,
            job_title: jobMatch ? jobMatch.title : null,
          };
        });

        setJobs(jobMapping);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <Box sx={{ py: 8 }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          pb: 2,
        }}
      >
        <Typography variant="h6">Favorite Jobs</Typography>
        <Button sx={{ textTransform: "none" }} startIcon={<EditOutlinedIcon />}>
          Edit Job Preference
        </Button>
      </Box>

      <Box>
        {jobs.map((j, index) => (
          <Card
            key={index}
            variant="outlined"
            sx={{ mt: 2, display: "flex", justifyContent: "space-between" }}
          >
            <CardContent sx={{ display: "flex", gap: 2, alignItems: "center" }}>
              <img src={Icon} alt="facebook" width={74} />
              <Box>
                <Typography variant="h6">{j.job_title}</Typography>
                <Box sx={{ display: { md: "flex" }, gap: 1 }}>
                  <Typography variant="body2" color="textSecondary">
                    {j.job_location}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    $ {j.salary}
                  </Typography>
                </Box>
              </Box>
            </CardContent>

            <CardActions>
              <BookmarkBorderOutlinedIcon />
              <Button
                LinkComponent="a"
                href={`/job/${j.posted_job_id}`}
                variant="outlined"
                endIcon={<ArrowForwardIcon />}
                sx={{ textTransform: "none" }}
              >
                View
              </Button>
            </CardActions>
          </Card>
        ))}
      </Box>

      <Box sx={{ py: 10, display: "flex", justifyContent: "center" }}>
        <Pagination count={10} variant="outlined" color="primary" />
      </Box>
    </Box>
  );
};

export default FavoriteJobs;

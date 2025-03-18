import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Box, Button, Container, Typography } from "@mui/material";

import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import Icon from "../../assets/facebook.svg";
import JobDescription from "./JobDescription";
import RelatedJob from "./RelatedJob";

import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import { getAllPostedJob } from "../../helper/postedJob";
import { getAllUsers } from "../../helper/helper";
import { getAllJobs } from "../../helper/job";
import JobApplication from "./JobApplication";
import { useAuthStore } from "../../store/authStore";
import { saveAppliedJob } from "../../helper/appliedJob";

const JobDetail = () => {
  const [open, setOpen] = useState(false);

  const [postedJob, setPostedJob] = useState([]);

  const { jobId } = useParams();

  const { auth } = useAuthStore();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const postedJobs = await getAllPostedJob();
        const users = await getAllUsers();
        const jobs = await getAllJobs();

        //there is issue with find therefore convert it to the filter
        const targetJob = postedJobs.data.find(
          (job) => job.posted_job_id === jobId
        );

        if (targetJob) {
          const userMatch = users.data.find(
            (u) => u.user_id === targetJob.user_id
          );

          const jobMatch = jobs.data.find((j) => j.job_id === targetJob.job_id);

          const modifiedJob = {
            ...targetJob,
            company_name: userMatch ? userMatch.name : "Unknown",
            job_title: jobMatch ? jobMatch.title : "Unknown",
          };

          setPostedJob(modifiedJob);
        } else {
          console.error("Job not found");
        }
      } catch (error) {
        console.log(response);
      }
    };

    fetchData();
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async () => {
    const user_id = auth.userId;
    const applied_date = new Date().toISOString().split("T")[0];
    const posted_job_id = postedJob.posted_job_id;

    const data = {
      user_id,
      applied_date,
      posted_job_id,
    };

    try {
      const response = await saveAppliedJob(data);
      console.log(response);

      handleClose();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <section>
        <Container sx={{ py: 10 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              background: "#f7f7f8",
              p: 2,
              borderRadius: 3,
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <img src={Icon} alt="facebook" width={68} />
              <Box>
                <Typography variant="h5" sx={{ fontWeight: "medium" }}>
                  {postedJob.job_title}
                </Typography>
                <Typography
                  sx={{ display: "flex", gap: 1 }}
                  color="text.secondary"
                >
                  at {postedJob.company_name}
                  <Box
                    sx={{
                      bgcolor: "#1976D2",
                      alignContent: "center",
                      px: 1,
                      borderRadius: 1,
                    }}
                  >
                    <Typography
                      sx={{
                        color: "white",
                        fontSize: "10px",
                        fontWeight: "bold",
                        textTransform: "uppercase",
                      }}
                    >
                      {postedJob.job_type}
                    </Typography>
                  </Box>
                </Typography>
              </Box>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <BookmarkBorderOutlinedIcon
                sx={{
                  p: 1,
                  backgroundColor: "white",
                  color: "#1976D2",
                  borderRadius: 1,
                }}
              />
              <Button
                variant="contained"
                sx={{ display: "flex", gap: 1 }}
                onClick={handleClickOpen}
              >
                Apply Now <ArrowForwardOutlinedIcon />
              </Button>
            </Box>
          </Box>

          <Box sx={{ mt: 5 }}>
            <JobDescription postedJob={postedJob} />
          </Box>
        </Container>
      </section>

      <section>
        <Container sx={{ py: 15 }}>
          <Typography variant="h4" sx={{ mb: 8, fontWeight: "medium" }}>
            Related Jobs
          </Typography>
          <RelatedJob />
        </Container>
      </section>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Apply Job: Senior Software Engineer</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Repellendus animi perferendis laudantium fuga voluptate tempore nemo
            quas omnis suscipit rem?
          </DialogContentText>

          <JobApplication />
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose} variant="outlined">
            Cancel
          </Button>
          <Button variant="contained" onClick={handleSubmit}>
            Continue
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default JobDetail;

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

const JobDetail = () => {
  const [open, setOpen] = useState(false);

  const [postedJob, setPostedJob] = useState([]);

  const { jobId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const postedJobs = await getAllPostedJob();
        const users = await getAllUsers();
        const jobs = await getAllJobs();

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

  return (
    <div>
      <section>
        <Container sx={{ py: 10 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <img src={Icon} alt="facebook" width={74} />
              <Box>
                <Typography variant="h5">{postedJob.job_title}</Typography>
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
                  backgroundColor: "#f7f7f8",
                  color: "blue",
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
          <Typography variant="h4" sx={{ mb: 5 }}>
            Related Jobs
          </Typography>
          <RelatedJob />
        </Container>
      </section>

      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: "form",
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const email = formJson.email;
            console.log(email);
            handleClose();
          },
        }}
      >
        <DialogTitle>Apply Job: Senior Software Engineer</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Repellendus animi perferendis laudantium fuga voluptate tempore nemo
            quas omnis suscipit rem?
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="email"
            label="Email Address"
            type="email"
            fullWidth
          />
          <TextField
            id="outlined-multiline-static"
            label="Message To Hiring Team"
            multiline
            fullWidth
            margin="dense"
            rows={4}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="outlined">
            Cancel
          </Button>
          <Button type="submit" variant="contained">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default JobDetail;

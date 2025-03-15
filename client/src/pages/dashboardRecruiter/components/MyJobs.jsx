import React, { useEffect, useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import RecentlyPostedJobs from "./RecentlyPostedJobs";
import AddCircleOutlineOutlined from "@mui/icons-material/AddCircleOutlineOutlined";
import PostJobForm from "./PostJobForm";

import useModalStore from "../../../store/modal";
import { getAllJobs } from "../../../helper/job";
import { getAllJobTag } from "../../../helper/jobTag";

const MyJobs = ({ user_id }) => {
  const { isModalOpen, toggleModal } = useModalStore();

  const [jobs, setJobs] = useState([]);
  const [tags, setTags] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const jobs = await getAllJobs();
        const tags = await getAllJobTag();

        setJobs(jobs.data);
        setTags(tags.data);
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
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h6" gutterBottom>
          My Jobs
        </Typography>
        <Button
          onClick={() => toggleModal(!isModalOpen)}
          endIcon={<AddCircleOutlineOutlined />}
          variant="contained"
        >
          Post Job
        </Button>
      </Box>
      <Box sx={{ py: 5 }}>
        <RecentlyPostedJobs />
      </Box>

      {/*Dialog Form*/}
      {isModalOpen && <PostJobForm user_id={user_id} jobs={jobs} tags={tags} />}
    </Box>
  );
};

export default MyJobs;

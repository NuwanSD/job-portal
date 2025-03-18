import { Box, Typography, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import TimerOutlinedIcon from "@mui/icons-material/TimerOutlined";
import LayersOutlinedIcon from "@mui/icons-material/LayersOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import AttachFileOutlinedIcon from "@mui/icons-material/AttachFileOutlined";

import { getAllJobRequirement } from "../../helper/jobRequirement";
import { getAllJobBenefit } from "../../helper/jobBenefit";
import { getAllJobTag } from "../../helper/jobTag";
import { getAllAllocatedTag } from "../../helper/tagAllocate";

const JobDescription = ({ postedJob }) => {
  const [requirement, setRequirement] = useState([]);
  const [benefit, setBenefit] = useState([]);
  const [jobTag, setJobTag] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      if (!postedJob?.posted_job_id) return;

      try {
        const requirements = await getAllJobRequirement();

        const benefits = await getAllJobBenefit();

        const jobRequirements = requirements.data.filter(
          (req) => req.posted_job_id === postedJob.posted_job_id
        );

        const jobBenefit = benefits.data.filter(
          (b) => b.posted_job_id === postedJob.posted_job_id
        );

        setRequirement(jobRequirements);
        setBenefit(jobBenefit);

        const job_tag = await getAllJobTag();

        const tag_allocate = await getAllAllocatedTag();

        const targetIds = tag_allocate.data.filter(
          (t) => t.posted_job_id === postedJob.posted_job_id
        );

        const jobTags = job_tag.data.filter((a) =>
          targetIds.some((t) => t.tag_id === a.tag_id)
        );

        setJobTag(jobTags);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [postedJob]);

  return (
    <Box
      sx={{
        display: { xs: "row", md: "flex" },
        justifyContent: "space-between",
        gap: 4,
      }}
    >
      <Box sx={{ mb: { xs: 5 } }}>
        <Typography variant="h6" sx={{ textAlign: "left" }}>
          Job Description
        </Typography>

        <Typography sx={{ mt: 2 }}>{postedJob.description}</Typography>

        <Typography sx={{ mt: 2, mb: 2, fontWeight: "medium" }}>
          Requirements
        </Typography>
        {requirement.map((req) => (
          <ul key={req.requirement_id}>
            <li>{req.description}</li>
          </ul>
        ))}

        <Typography sx={{ mt: 2, mb: 2, fontWeight: "medium" }}>
          Benefits
        </Typography>

        {benefit.map((b) => (
          <ul key={b.benefit_id}>
            <li>{b.description}</li>
          </ul>
        ))}
      </Box>

      <Box>
        <Card
          variant="outlined"
          sx={{ display: "flex", justifyContent: "center", width: "400px" }}
        >
          <CardContent
            sx={{ alignContent: "center", textAlign: "center", width: "200px" }}
          >
            <Typography variant="h6">Salary (USD)</Typography>
            <Typography color="primary">${postedJob.salary}</Typography>
            <Typography color="textSecondary">Yearly salary</Typography>
          </CardContent>

          <Divider orientation="vertical" variant="middle" flexItem />

          <CardContent
            sx={{
              alignContent: "center",
              textAlign: "center",
              justifyItems: "center",
              width: "200px",
            }}
          >
            <MapOutlinedIcon sx={{ color: "#1976D2", display: "block" }} />
            <Typography variant="h6">Job Location</Typography>
            <Typography color="textSecondary">
              {postedJob.job_location}
            </Typography>
          </CardContent>
        </Card>

        <Card variant="outlined" sx={{ mt: 2, width: "400px" }}>
          <CardContent>
            <Typography variant="h6">Job Benefits</Typography>
            <Box
              sx={{
                mt: 2,
                display: "grid",
                gridTemplateColumns:
                  "repeat(auto-fill, minmax(min(100px, 100%), 1fr))",
                gap: 1,
              }}
            >
              {benefit.map((b) => (
                <div key={b.benefit_id}>
                  <Typography
                    sx={{
                      bgcolor: "#e6f0ff",
                      display: "inline",
                      textAlign: "center",
                      border: 1,
                      borderRadius: 1,
                      px: 2,
                      whiteSpace: "nowrap",
                    }}
                  >
                    {b.benefit_tag}
                  </Typography>
                </div>
              ))}
            </Box>
          </CardContent>
        </Card>

        <Card variant="outlined" sx={{ mt: 2, width: "400px" }}>
          <CardContent>
            <Typography variant="h6">Job Overview</Typography>
            <Box
              sx={{
                mt: 2,
                display: "grid",
                gridTemplateColumns:
                  "repeat(auto-fill, minmax(min(100px, 100%), 1fr))",
                gap: 2,
              }}
            >
              <Box>
                <CalendarMonthOutlinedIcon />
                <Typography color="textSecondary">JOB POSTED</Typography>
                <Typography sx={{ fontWeight: "bold" }}>
                  {postedJob.posted_date}
                </Typography>
              </Box>
              <Typography>
                <TimerOutlinedIcon />
                <Typography color="textSecondary">JOB EXPIRE IN:</Typography>
                <Typography sx={{ fontWeight: "bold" }}>
                  {postedJob.expire_date}
                </Typography>
              </Typography>
              <Typography>
                <LayersOutlinedIcon />
                <Typography color="textSecondary">JOB LEVEL:</Typography>
                <Typography sx={{ fontWeight: "bold" }}>
                  {postedJob.job_level}
                </Typography>
              </Typography>
              <Typography>
                <AttachMoneyOutlinedIcon />
                <Typography color="textSecondary">SALARY</Typography>
                <Typography sx={{ fontWeight: "bold" }}>
                  ${postedJob.salary}
                </Typography>
              </Typography>
              <Typography>
                <SchoolOutlinedIcon />
                <Typography color="textSecondary">EXPERIENCE:</Typography>
                <Typography sx={{ fontWeight: "bold" }}>
                  {postedJob.experience}
                </Typography>
              </Typography>
            </Box>
          </CardContent>
        </Card>

        <Card variant="outlined" sx={{ mt: 2, width: "400px" }}>
          <CardContent>
            <Typography variant="h6">Share this job:</Typography>
            <Box sx={{ mt: 2, mb: 2 }}>
              <Button
                variant="outlined"
                sx={{ bgcolor: "#e6f0ff", display: "flex", gap: 1 }}
              >
                <AttachFileOutlinedIcon /> Copy Link
              </Button>
            </Box>
            <Typography>Job Tags:</Typography>
            <Box
              sx={{
                mt: 2,
                display: "grid",
                gridTemplateColumns:
                  "repeat(auto-fill, minmax(min(80px, 100%), 1fr))",
                gap: 1,
              }}
            >
              {jobTag.map((data) => (
                <Typography
                  key={data.tag_id}
                  sx={{
                    bgcolor: "#e6f0ff",
                    display: "inline",
                    textAlign: "center",
                    border: 1,
                    borderRadius: 1,
                  }}
                >
                  {data.tag}
                </Typography>
              ))}
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default JobDescription;

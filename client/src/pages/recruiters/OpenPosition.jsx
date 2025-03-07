import React, { useState, useEffect } from "react";
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
import { getAllJobs } from "../../helper/job";

function OpenPosition({ recruiter }) {
  const [openJob, setOpenJob] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      if (!recruiter?.user_id) return;

      try {
        const postedJobs = await getAllPostedJob();
        const jobs = await getAllJobs();

        const filteredData = postedJobs.data.filter(
          (job) => job.user_id === recruiter.user_id
        );

        const modifiedData = filteredData.map((d) => {
          const jobMatch = jobs.data.find((j) => j.job_id === d.job_id);

          return {
            ...d,
            company_name: recruiter?.name || "Unknown",
            job_title: jobMatch ? jobMatch.title : "Unknown",
          };
        });

        setOpenJob(modifiedData);
      } catch (error) {
        console.log(response);
      }
    };

    fetchData();
  }, [recruiter]);

  return (
    <Box
      sx={{
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(min(350px, 100%), 1fr))",
        gap: 2,
      }}
    >
      {openJob.map((j) => (
        <Card key={j.posted_job_id} sx={{ width: "100%" }} variant="outlined">
          <CardActionArea LinkComponent="a" href={`/job/${j.posted_job_id}`}>
            <CardContent sx={{ height: "100%" }}>
              <Box>
                <Typography variant="h6" component="div">
                  {j.job_title}
                </Typography>
                <Box sx={{ display: "flex", gap: 1 }}>
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
                      {j.job_type}
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="text.secondary">
                    $ {j.salary}
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{ mt: 4, display: "flex", alignContent: "center", gap: 2 }}
              >
                <VerifiedOutlinedIcon sx={{ color: "#1976D2" }} />
                <Typography>{j.company_name}</Typography>
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

export default OpenPosition;

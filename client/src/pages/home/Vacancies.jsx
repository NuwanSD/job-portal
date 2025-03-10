import React, { useEffect, useState } from "react";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

import { getAllJobs } from "../../helper/job";

function SelectActionCard() {
  const [selectedCard, setSelectedCard] = useState(0);

  const [jobs, setAllJobs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const jobs = await getAllJobs();

        setAllJobs(jobs.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(min(250px, 100%), 1fr))",
        gap: 4,
      }}
    >
      {jobs.map((job, index) => (
        <Card key={job.job_id} variant="outlined" sx={{ boxShadow: 1 }}>
          <CardActionArea
            onClick={() => setSelectedCard(index)}
            data-active={selectedCard === index ? "" : undefined}
            sx={{
              height: "100%",
              "&[data-active]": {
                backgroundColor: "action.selected",
                "&:hover": {
                  backgroundColor: "action.selectedHover",
                },
              },
            }}
          >
            <CardContent sx={{ height: "100%" }}>
              <Typography variant="h6" component="div">
                {job.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {job.description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </Box>
  );
}

export default SelectActionCard;

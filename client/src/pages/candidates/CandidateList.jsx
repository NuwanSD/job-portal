import React, { useEffect, useState } from "react";

import { Box, Button, Card } from "@mui/material";
import { CardContent } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import { Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";

import { getAllJobSeekers } from "../../helper/jobSeeker";
import { getAllUsers } from "../../helper/helper";

const CandidateList = () => {
  const [candidate, setCandiate] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const users = await getAllUsers();
      const jobSeekers = await getAllJobSeekers();

      const filteredData = users.data.filter((u) =>
        jobSeekers.data.some((jobSeeker) => jobSeeker.user_id === u.user_id)
      );

      const modifiedData = filteredData.map((u) => {
        const userMatch = jobSeekers.data.find((j) => j.user_id === u.user_id);
        return {
          ...u,
          photo_url: userMatch ? userMatch.photo_url : null,
          status: userMatch ? userMatch.description : null,
        };
      });

      setCandiate(modifiedData);
    };

    fetchData();
  }, []);

  return (
    <div>
      <Box>
        {candidate.map((c) => (
          <Card
            key={c.user_id}
            variant="outlined"
            sx={{ mt: 2, display: "flex", justifyContent: "space-between" }}
          >
            <CardContent sx={{ display: "flex", gap: 2, alignItems: "center" }}>
              <Avatar
                alt="Cody Fisher"
                variant="square"
                src={c.photo_url}
                sx={{ width: 82, height: 82, borderRadius: 1 }}
              />
              <Box>
                <Typography variant="h6">{c.name}</Typography>
                <Typography color="textSecondary">{c.status}</Typography>
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: 1, mt: 1 }}
                >
                  <FmdGoodOutlinedIcon color="" />
                  <Typography color="textSecondary">
                    {c.city}, {c.country}
                  </Typography>
                </Box>
              </Box>
            </CardContent>
            <CardActions>
              <BookmarkBorderOutlinedIcon />
              <Button
                LinkComponent="a"
                href={`/candidate/${c.user_id}`}
                variant="outlined"
                endIcon={<ArrowForwardIcon />}
              >
                View Profile
              </Button>
            </CardActions>
          </Card>
        ))}
      </Box>
    </div>
  );
};

export default CandidateList;

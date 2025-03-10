import React, { useEffect, useState } from "react";

import { Box, Button, Card, Divider } from "@mui/material";
import { CardContent } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import { Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";

import { getAllJobSeekers } from "../../helper/jobSeeker";
import { getAllUsers } from "../../helper/helper";

import UserImg from "../../assets/user.png";

const CandidateList = () => {
  const [candidate, setCandiate] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const users = await getAllUsers();
      const jobSeekers = await getAllJobSeekers();

      const filteredData = users.data.filter((u) => u.role === "candidate");

      const modifiedData = filteredData.map((u) => {
        const userMatch = jobSeekers.data.find((j) => j.user_id === u.user_id);
        return {
          ...u,
          photo_url: userMatch ? userMatch.photo_url : UserImg,
          status: userMatch ? userMatch.description : "Not Verified",
        };
      });

      setCandiate(modifiedData);
    };

    fetchData();
  }, []);

  return (
    <div>
      <Box
        sx={{
          width: "100%",
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fill, minmax(min(250px, 100%), 1fr))",
          gap: 4,
        }}
      >
        {candidate.map((c) => (
          <Card key={c.user_id} variant="outlined" sx={{ width: "100%" }}>
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Box>
                <img src={UserImg} alt="User" width="215px" />
              </Box>

              <Box sx={{ textAlign: "left" }}>
                <Typography variant="h6">{c.name}</Typography>
                <Typography color="textSecondary" sx={{ fontWeight: "medium" }}>
                  {c.status}
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
                  <FmdGoodOutlinedIcon color="" />
                  <Typography color="textSecondary">
                    {c.city}, {c.country}
                  </Typography>
                </Box>
              </Box>
            </CardContent>

            <CardActions
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <Button LinkComponent="a" href={`/candidate/${c.user_id}`}>
                View Profile
              </Button>
              <BookmarkBorderOutlinedIcon />
            </CardActions>
          </Card>
        ))}
      </Box>
    </div>
  );
};

export default CandidateList;

import React, { useEffect, useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from "@mui/material";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import RecentlyPostedJobs from "./RecentlyPostedJobs";
import { useAuthStore } from "../../../store/authStore";
import { getUserById } from "../../../helper/helper";

const Overview = () => {
  const { auth } = useAuthStore();

  const user_id = auth.userId;

  const [user, setUser] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getUserById({ user_id });

      setUser(response.data[0]);
    };

    fetchData();
  }, [user_id]);

  return (
    <Box sx={{ py: 8 }}>
      <Typography variant="h6">Hello, {user.name}</Typography>
      <Typography color="textSecondary">
        This is your daily activities and applications
      </Typography>

      <Box
        sx={{
          py: 4,
          display: "flex",
          gap: 2,
        }}
      >
        <Card
          variant="outlined"
          sx={{ backgroundColor: "#D1F8EF", width: "100%" }}
        >
          <CardActionArea>
            <CardContent>
              <Typography>589</Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                Open Jobs
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card
          variant="outlined"
          sx={{ backgroundColor: "#FFE2E2", width: "100%" }}
        >
          <CardActionArea>
            <CardContent>
              <Typography>2,517</Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                Saved Candidates
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Box>

      <Box sx={{ py: 2 }}>
        <Card variant="outlined" sx={{ background: "#E05151", color: "white" }}>
          <CardContent
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
              <Avatar
                alt="Travis Howard"
                src="/static/images/avatar/2.jpg"
                sx={{ width: 56, height: 56 }}
              />
              <Box>
                <Typography>Your profile editing is not completed</Typography>
                <Typography variant="caption" color="#D9DFC6">
                  Complete your profile editing & build your custom Resume
                </Typography>
              </Box>
            </Box>
            <Box>
              <Button
                variant="contained"
                endIcon={<ArrowForwardOutlinedIcon />}
                sx={{ background: "white", color: "#E05151" }}
              >
                Edit Profile
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Box>

      <Box sx={{ py: 2 }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h6">Recently Posted Jobs</Typography>
          <Button endIcon={<ArrowForwardOutlinedIcon />}>View all</Button>
        </Box>
      </Box>

      <Box sx={{ py: 2 }}>
        <RecentlyPostedJobs />
      </Box>
    </Box>
  );
};

export default Overview;

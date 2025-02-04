import React from "react";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from "@mui/material";

const Overview = () => {
  return (
    <Box sx={{ py: 8 }}>
      <Typography variant="h6">Hello, Esther Howard</Typography>
      <Typography color="textSecondary">
        Hello is your daily activities and job alerts
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
                Applied Jobs
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
              <Typography>238</Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                Favorite Jobs
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card
          variant="outlined"
          sx={{ backgroundColor: "#D1F8EF", width: "100%" }}
        >
          <CardActionArea>
            <CardContent>
              <Typography>589</Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                Job Alerts
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Box>
      <Box>
        <Card variant="outlined">
          <CardContent>Profile</CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default Overview;

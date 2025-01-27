import React from "react";
import {
  Box,
  TextField,
  Typography,
  Card,
  CardContent,
  Button,
  Link,
  Divider,
} from "@mui/material";

const Recruiter = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Box variant="outlined" sx={{ width: "400px", borderRadius: 2 }}>
        <TextField
          margin="dense"
          id="username"
          label="Username"
          variant="outlined"
          type="text"
          sx={{ width: "100%" }}
        />
        <TextField
          margin="dense"
          id="name"
          label="Name"
          variant="outlined"
          type="text"
          sx={{ width: "100%" }}
        />
        <TextField
          margin="dense"
          id="email"
          label="Email"
          variant="outlined"
          type="email"
          sx={{ width: "100%" }}
        />
        <TextField
          margin="dense"
          id="phone"
          label="Phone"
          type="text"
          variant="outlined"
          sx={{ width: "100%" }}
        />

        <TextField
          margin="dense"
          id="city"
          label="City"
          type="text"
          variant="outlined"
          sx={{ width: "100%" }}
        />

        <TextField
          margin="dense"
          id="country"
          label="Country"
          type="text"
          variant="outlined"
          sx={{ width: "100%" }}
        />

        <TextField
          margin="dense"
          id="password"
          label="Password"
          type="password"
          variant="outlined"
          sx={{ width: "100%" }}
        />

        <TextField
          margin="dense"
          id="confirmPassword"
          label="Confirm Password"
          type="password"
          variant="outlined"
          sx={{ width: "100%" }}
        />
        <Button
          type="submit"
          variant="contained"
          sx={{ mt: 1, width: "100%", textTransform: "none" }}
        >
          Sign Up
        </Button>
      </Box>
    </Box>
  );
};

export default Recruiter;

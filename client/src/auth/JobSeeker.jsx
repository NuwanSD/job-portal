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

const JobSeeker = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Box variant="outlined" sx={{ width: "400px", borderRadius: 2 }}>
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
          id="bday"
          label="Birth Date"
          type="date"
          variant="outlined"
          sx={{ width: "100%" }}
        />

        <TextField
          margin="dense"
          id="address"
          label="Address"
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
          multiline
          margin="dense"
          id="bio"
          label="Biography"
          type="text"
          variant="outlined"
          sx={{ width: "100%" }}
          rows={3}
        />

        <TextField
          margin="dense"
          id="password"
          label="Password"
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

export default JobSeeker;

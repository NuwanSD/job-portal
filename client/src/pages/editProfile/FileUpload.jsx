import React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import User from "../../assets/user.png";
import { Box, Divider, Typography, Card, CardContent } from "@mui/material";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

export default function FileUpload() {
  return (
    <Box>
      <Box>
        <Typography variant="h6">Profile Photo</Typography>
        <Box sx={{ mb: 2, width: "150px" }}>
          <Box sx={{}}>
            <img src={User} width="150px" />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <Button variant="contained">Main</Button>
            <Button variant="contained" color="warning">
              Delete
            </Button>
          </Box>
        </Box>
        <Box>
          <Button
            component="label"
            role={undefined}
            variant="contained"
            tabIndex={-1}
            startIcon={<CloudUploadIcon />}
          >
            Upload Photo
            <VisuallyHiddenInput
              type="file"
              onChange={(event) => console.log(event.target.files)}
            />
          </Button>
        </Box>
      </Box>
      <Divider sx={{ mt: 4 }} />
      <Box sx={{ mt: 4 }}>
        <Typography variant="h6">Your Resume</Typography>

        <Card variant="outlined" sx={{ mt: 2, width: "400px" }}>
          <CardContent>
            <Typography variant="h6">My Resume</Typography>
            <Box
              sx={{
                mt: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <span>Pdf here with the name</span>
              <FileDownloadOutlinedIcon />
            </Box>
          </CardContent>
        </Card>
        <Box sx={{ mt: 4 }}>
          <Button
            component="label"
            role={undefined}
            variant="contained"
            tabIndex={-1}
            startIcon={<CloudUploadIcon />}
          >
            Upload Resume
            <VisuallyHiddenInput
              type="file"
              onChange={(event) => console.log(event.target.files)}
            />
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

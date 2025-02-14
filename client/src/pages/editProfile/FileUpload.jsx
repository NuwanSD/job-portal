import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import User from "../../assets/user.png";
import {
  Box,
  Divider,
  Typography,
  Card,
  CardContent,
  LinearProgress,
} from "@mui/material";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import DoNotDisturbAltOutlinedIcon from "@mui/icons-material/DoNotDisturbAltOutlined";
import axios from "axios";

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
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadFile, setUploadFile] = useState(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append("file", file);

    setUploadProgress(0);

    axios
      .post("/upload", formData, {
        onUploadProgress: (progressEvent) => {
          const percentCompleted = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          setUploadProgress(percentCompleted);
        },
      })
      .then((res) => console.log(res))
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Box>
      <Box>
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
            <Button variant="contained">Save</Button>
            <Button variant="contained" color="warning">
              Delete
            </Button>
          </Box>
        </Box>

        <Box sx={{ display: { xs: "row", md: "flex" }, gap: 5 }}>
          <Box>
            <Typography variant="h6" gutterBottom>
              Upload Photo
            </Typography>
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
                onChange={(event) => {
                  console.log(event.target.files);
                  handleFileUpload(event);
                }}
              />
            </Button>
          </Box>

          <Box sx={{ mt: { xs: 4, sm: 2, md: 0, width: "100%" } }}>
            <Typography variant="h6" gutterBottom>
              Upload Queue
            </Typography>
            <Box>
              <TableContainer component={Paper} variant="outlined">
                <Table aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Name</TableCell>
                      <TableCell>Size</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell component="th" scope="row">
                        DESC_01
                      </TableCell>
                      <TableCell>1 KB</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
              <Box sx={{ py: 2 }}>
                <LinearProgress
                  sx={{ height: 20, borderRadius: 4 }}
                  variant="determinate"
                  value={uploadProgress}
                />
                <Box sx={{ py: 2, display: "flex", gap: 1 }}>
                  <Button
                    startIcon={<FileUploadOutlinedIcon />}
                    variant="contained"
                  >
                    Upload
                  </Button>
                  <Button
                    startIcon={<DoNotDisturbAltOutlinedIcon />}
                    variant="contained"
                  >
                    Cancel
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      <Divider sx={{ mt: 4 }} />
      <Box sx={{ mt: 4 }}>
        <Typography variant="h6">Your Resume</Typography>

        <Card variant="outlined" sx={{ my: 4, width: "400px" }}>
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
        <Box sx={{ display: { xs: "row", md: "flex" }, gap: 5 }}>
          <Box>
            <Typography variant="h6" gutterBottom>
              Upload File
            </Typography>
            <Button
              component="label"
              role={undefined}
              variant="contained"
              tabIndex={-1}
              startIcon={<CloudUploadIcon />}
            >
              Upload File
              <VisuallyHiddenInput
                type="file"
                onChange={(event) => {
                  console.log(event.target.files);
                  handleFileUpload(event);
                }}
              />
            </Button>
          </Box>
          <Box sx={{ mt: { xs: 4, sm: 2, md: 0, width: "100%" } }}>
            <Typography variant="h6" gutterBottom>
              Upload Queue
            </Typography>
            <Box>
              <TableContainer component={Paper} variant="outlined">
                <Table aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Name</TableCell>
                      <TableCell>Size</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell component="th" scope="row">
                        DESC_01
                      </TableCell>
                      <TableCell>1 KB</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
              <Box sx={{ py: 2 }}>
                <LinearProgress
                  sx={{ height: 20, borderRadius: 4 }}
                  variant="determinate"
                  value={uploadProgress}
                />
                <Box sx={{ py: 2, display: "flex", gap: 1 }}>
                  <Button
                    startIcon={<FileUploadOutlinedIcon />}
                    variant="contained"
                  >
                    Upload
                  </Button>
                  <Button
                    startIcon={<DoNotDisturbAltOutlinedIcon />}
                    variant="contained"
                  >
                    Cancel
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

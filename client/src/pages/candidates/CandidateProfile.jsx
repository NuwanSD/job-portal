import React from "react";
import { useParams } from "react-router-dom";
import {
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  Typography,
} from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import LayersOutlinedIcon from "@mui/icons-material/LayersOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import PhoneInTalkOutlinedIcon from "@mui/icons-material/PhoneInTalkOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import CakeOutlinedIcon from "@mui/icons-material/CakeOutlined";
import OutlinedFlagOutlinedIcon from "@mui/icons-material/OutlinedFlagOutlined";
import StickyNote2OutlinedIcon from "@mui/icons-material/StickyNote2Outlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";

const CandidateProfile = () => {
  const params = useParams();

  console.log(params);

  return (
    <div>
      <Container>
        <Card sx={{ mt: 10 }}>
          <CardContent>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Avatar
                  alt="Cody Fisher"
                  src={""}
                  sx={{ width: 82, height: 82 }}
                />
                <Box>
                  <Typography variant="h6">John Doe</Typography>
                  <Typography color="textSecondary">
                    Software Engineer
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <BookmarkBorderOutlinedIcon
                  sx={{ p: 1.5, borderRadius: 1, bgcolor: "#f7f7f8" }}
                />
                <Button
                  size="large"
                  variant="contained"
                  startIcon={<MailOutlineOutlinedIcon />}
                  sx={{ textTransform: "none" }}
                >
                  Send Mail
                </Button>
              </Box>
            </Box>
          </CardContent>
        </Card>

        <Box
          sx={{
            py: 10,
            display: { xs: "row", md: "flex" },
            justifyContent: "space-between",
            gap: 5,
          }}
        >
          <Box>
            <Typography sx={{ fontWeight: "bold" }} gutterBottom>
              BIOGRAPHY
            </Typography>
            <Typography gutterBottom>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
              ac consectetur ac, vestibulum at eros. Praesent commodo cursus
              magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus
              vel augue laoreet rutrum faucibus dolor auctor.
            </Typography>

            <Typography sx={{ fontWeight: "bold", mt: 4 }} gutterBottom>
              COVER LETTER
            </Typography>
            <Typography gutterBottom>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
              ac consectetur ac, vestibulum at eros. Praesent commodo cursus
              magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus
              vel augue laoreet rutrum faucibus dolor auctor. Cras mattis
              consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
              facilisis in, egestas eget quam. Morbi leo risus, porta ac
              consectetur ac, vestibulum at eros. Praesent commodo cursus magna,
              vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel
              augue laoreet rutrum faucibus dolor auctor. Cras mattis
              consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
              facilisis in, egestas eget quam. Morbi leo risus, porta ac
              consectetur ac, vestibulum at eros. Praesent commodo cursus magna,
              vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel
              augue laoreet rutrum faucibus dolor auctor.
            </Typography>

            <Divider sx={{ mt: 5 }} />

            <Box sx={{ my: 5 }}>
              <Typography variant="h6">Follow me Social Media:</Typography>
              <Box sx={{ mt: 2 }}>Social Media Links with icons</Box>
            </Box>
          </Box>

          <Box>
            <Card variant="outlined" sx={{ width: "400px" }}>
              <CardContent>
                <Box>
                  <Box sx={{ display: "flex", mt: 2 }}>
                    <Box sx={{ width: "200px" }}>
                      <CakeOutlinedIcon color="primary" />
                      <Typography color="textSecondary">
                        DATE OF BIRTH
                      </Typography>
                      <Typography sx={{ fontWeight: "bold" }}>
                        14 Jun, 2025
                      </Typography>
                    </Box>

                    <Box sx={{ width: "200px" }}>
                      <OutlinedFlagOutlinedIcon color="primary" />
                      <Typography color="textSecondary">NATIONALITY</Typography>
                      <Typography sx={{ fontWeight: "bold" }}>
                        Sinhalese
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ display: "flex", mt: 2 }}>
                    <Box sx={{ width: "200px" }}>
                      <StickyNote2OutlinedIcon color="primary" />
                      <Typography color="textSecondary">
                        MARITAL STATUS
                      </Typography>
                      <Typography sx={{ fontWeight: "bold" }}>
                        Single
                      </Typography>
                    </Box>

                    <Box sx={{ width: "200px" }}>
                      <AccountCircleOutlinedIcon color="primary" />
                      <Typography color="textSecondary">GENDER</Typography>
                      <Typography sx={{ fontWeight: "bold" }}>Male</Typography>
                    </Box>
                  </Box>

                  <Box sx={{ display: "flex", mt: 2 }}>
                    <Box sx={{ width: "200px" }}>
                      <LayersOutlinedIcon color="primary" />
                      <Typography color="textSecondary">EXPERIENCE</Typography>
                      <Typography sx={{ fontWeight: "bold" }}>
                        5 Years
                      </Typography>
                    </Box>

                    <Box sx={{ width: "200px" }}>
                      <SchoolOutlinedIcon color="primary" />
                      <Typography color="textSecondary">EDUCATIONS</Typography>
                      <Typography sx={{ fontWeight: "bold" }}>
                        Master Degree
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </CardContent>
            </Card>

            <Card variant="outlined" sx={{ mt: 2, width: "400px" }}>
              <CardContent>
                <Typography variant="h6">Download My Resume</Typography>
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

            <Card variant="outlined" sx={{ mt: 2, width: "400px" }}>
              <CardContent>
                <Typography variant="h6">Contact Information</Typography>
                <Box sx={{ display: "flex", gap: 1, py: 2 }}>
                  <LanguageOutlinedIcon color="primary" />
                  <Typography>www.facebook.com</Typography>
                </Box>
                <Divider />
                <Box sx={{ display: "flex", gap: 1, py: 2 }}>
                  <PhoneInTalkOutlinedIcon color="primary" />
                  <Typography>+1-202-555-0141</Typography>
                </Box>
                <Divider />
                <Box sx={{ display: "flex", gap: 1, py: 2 }}>
                  <MailOutlineOutlinedIcon color="primary" />
                  <Typography>company@email.com</Typography>
                </Box>
                <Divider />
                <Box sx={{ display: "flex", gap: 1, py: 2 }}>
                  <FmdGoodOutlinedIcon color="primary" />
                  <Typography>Location here</Typography>
                </Box>
              </CardContent>
            </Card>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default CandidateProfile;

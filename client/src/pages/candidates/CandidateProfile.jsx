import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  Link,
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

import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";

import { getAllJobSeekers, getJobSeekerById } from "../../helper/jobSeeker";
import { getUserById } from "../../helper/helper";

const CandidateProfile = () => {
  const { id } = useParams();

  const [candidate, setCandidate] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const jobSeekers = await getAllJobSeekers();

        const filteredData = jobSeekers.data.find((j) => j.user_id === id);

        const user_id = id;
        const jobSeekerBasic = await getUserById({ user_id });

        const response = jobSeekerBasic.data[0];

        const modifiedData = {
          ...filteredData,
          name: response.name,
          phone: response.phone,
          email: response.email,
          city: response.city,
          country: response.country,
        };

        setCandidate(modifiedData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [id]);

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
                  <Typography variant="h6">{candidate.name}</Typography>
                  <Typography color="textSecondary">
                    {candidate.description}
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
            <Typography gutterBottom>{candidate.looking_for}</Typography>

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
              <Box sx={{ mt: 2, display: "flex", gap: 2 }}>
                <Link href={""} sx={{ color: "inherit" }}>
                  <FaLinkedin size={28} />
                </Link>
                <Link href={""} sx={{ color: "inherit" }}>
                  <FaFacebookSquare size={28} />
                </Link>
                <Link href={""} sx={{ color: "inherit" }}>
                  <FaXTwitter size={28} />
                </Link>
                <Link href={""} sx={{ color: "inherit" }}>
                  <FaInstagramSquare size={28} />
                </Link>
              </Box>
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
                        {candidate.birthday}
                      </Typography>
                    </Box>

                    <Box sx={{ width: "200px" }}>
                      <OutlinedFlagOutlinedIcon color="primary" />
                      <Typography color="textSecondary">NATIONALITY</Typography>
                      <Typography sx={{ fontWeight: "bold" }}>
                        {candidate.nationality}
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
                      <Typography sx={{ fontWeight: "bold" }}>
                        {candidate.gender}
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ display: "flex", mt: 2 }}>
                    <Box sx={{ width: "200px" }}>
                      <LayersOutlinedIcon color="primary" />
                      <Typography color="textSecondary">EXPERIENCE</Typography>
                      <Typography sx={{ fontWeight: "bold" }}>
                        {candidate.experience}
                      </Typography>
                    </Box>

                    <Box sx={{ width: "200px" }}>
                      <SchoolOutlinedIcon color="primary" />
                      <Typography color="textSecondary">EDUCATIONS</Typography>
                      <Typography sx={{ fontWeight: "bold" }}>
                        {candidate.education}
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
                  <Typography>{candidate.website}</Typography>
                </Box>
                <Divider />
                <Box sx={{ display: "flex", gap: 1, py: 2 }}>
                  <PhoneInTalkOutlinedIcon color="primary" />
                  <Typography>{candidate.phone}</Typography>
                </Box>
                <Divider />
                <Box sx={{ display: "flex", gap: 1, py: 2 }}>
                  <MailOutlineOutlinedIcon color="primary" />
                  <Typography>{candidate.email}</Typography>
                </Box>
                <Divider />
                <Box sx={{ display: "flex", gap: 1, py: 2 }}>
                  <FmdGoodOutlinedIcon color="primary" />
                  <Typography>
                    {candidate.city}, {candidate.country}
                  </Typography>
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

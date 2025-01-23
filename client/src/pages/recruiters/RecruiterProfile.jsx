import React from "react";
import { useParams } from "react-router-dom";
import { Box, Button, Container, Typography } from "@mui/material";
import Logo from "../../assets/facebook.svg";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import TimerOutlinedIcon from "@mui/icons-material/TimerOutlined";
import LayersOutlinedIcon from "@mui/icons-material/LayersOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import AttachFileOutlinedIcon from "@mui/icons-material/AttachFileOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import PhoneInTalkOutlinedIcon from "@mui/icons-material/PhoneInTalkOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import OpenPosition from "./OpenPosition";

const RecruiterProfile = () => {
  const params = useParams();

  console.log(params);

  return (
    <div>
      <section>
        <Container sx={{ py: 5 }}>
          <Card>
            <CardContent>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <img src={Logo} alt="Logo" width={82} />
                  <Box>
                    <Typography sx={{ fontWeight: "bold" }} variant="h5">
                      Facebook
                    </Typography>
                    <Typography color="textSecondary">
                      Information Technology (IT)
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <Button
                    variant="contained"
                    sx={{ textTransform: "none" }}
                    endIcon={<ArrowForwardIcon />}
                  >
                    View Open Position
                  </Button>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Container>
      </section>

      <section>
        <Container sx={{ py: 10 }}>
          <Box
            sx={{
              display: { xs: "row", md: "flex" },
              justifyContent: "space-between",
              gap: 4,
            }}
          >
            <Box sx={{ mb: { xs: 5 } }}>
              <Typography variant="h6" sx={{ textAlign: "left" }}>
                Description
              </Typography>

              <Typography sx={{ mt: 2 }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                magni sunt cum tempore ex, magnam vel, necessitatibus officia
                facilis amet eos similique aut nisi, vitae tempora labore error?
                Eaque tempore vero doloremque impedit maxime aperiam quaerat
                cupiditate voluptatum obcaecati voluptatibus perferendis totam,
                aliquam dolores ut eius odio suscipit, enim deleniti, eum
                numquam ducimus! Quasi velit inventore culpa necessitatibus
                dicta. Optio ad laboriosam voluptatum incidunt. Adipisci natus
                quaerat aliquid laboriosam voluptatum molestias quos corporis,
                architecto beatae officia quam soluta quasi. Quos?
              </Typography>

              <Typography variant="h6" sx={{ mt: 2, mb: 2 }}>
                Company Benefits
              </Typography>
              <Typography sx={{ mb: 2 }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae commodi cumque unde vitae quam eveniet!
              </Typography>
              <ul>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corrupti, non?
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corrupti, non?
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corrupti, non?
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corrupti, non?
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corrupti, non?
                </li>
              </ul>
              <Typography variant="h6" sx={{ mt: 2, mb: 2 }}>
                Company Vision
              </Typography>
              <Typography sx={{ mt: 2 }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                eligendi ab aspernatur maxime dicta omnis necessitatibus quas
                repellendus expedita corrupti.
              </Typography>
            </Box>

            <Box>
              <Card variant="outlined" sx={{ mt: 2, width: "400px" }}>
                <CardContent>
                  <Typography variant="h6">Job Overview</Typography>
                  <Box>
                    <Box sx={{ display: "flex", mt: 2 }}>
                      <Box sx={{ width: "200px" }}>
                        <CalendarMonthOutlinedIcon color="primary" />
                        <Typography color="textSecondary">
                          FOUNDED IN
                        </Typography>
                        <Typography sx={{ fontWeight: "bold" }}>
                          14 Jun, 2025
                        </Typography>
                      </Box>

                      <Box sx={{ width: "200px" }}>
                        <TimerOutlinedIcon color="primary" />
                        <Typography color="textSecondary">
                          ORGANIZATION TYPE
                        </Typography>
                        <Typography sx={{ fontWeight: "bold" }}>
                          Private Company
                        </Typography>
                      </Box>
                    </Box>

                    <Box sx={{ display: "flex", mt: 2 }}>
                      <Box sx={{ width: "200px" }}>
                        <LayersOutlinedIcon color="primary" />
                        <Typography color="textSecondary">TEAM SIZE</Typography>
                        <Typography sx={{ fontWeight: "bold" }}>
                          120-300 Candidates
                        </Typography>
                      </Box>

                      <Box sx={{ width: "200px" }}>
                        <AttachMoneyOutlinedIcon color="primary" />
                        <Typography color="textSecondary">
                          INDUSTRY TYPE
                        </Typography>
                        <Typography sx={{ fontWeight: "bold" }}>
                          Technology
                        </Typography>
                      </Box>
                    </Box>
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
                  <Box sx={{ display: "flex", gap: 1, py: 2 }}>
                    <PhoneInTalkOutlinedIcon color="primary" />
                    <Typography>+1-202-555-0141</Typography>
                  </Box>
                  <Box sx={{ display: "flex", gap: 1, py: 2 }}>
                    <MailOutlineOutlinedIcon color="primary" />
                    <Typography>company@email.com</Typography>
                  </Box>
                </CardContent>
              </Card>

              <Card variant="outlined" sx={{ mt: 2, width: "400px" }}>
                <CardContent>
                  <Typography variant="h6">Follow us on:</Typography>
                  <Box sx={{ mt: 2 }}>Social Media Links</Box>
                </CardContent>
              </Card>
            </Box>
          </Box>
        </Container>
      </section>

      <section>
        <Container sx={{ py: 10 }}>
          <Typography variant="h4">Open Position (05)</Typography>
          <Box sx={{ mt: 10 }}>
            <OpenPosition />
          </Box>
        </Container>
      </section>
    </div>
  );
};

export default RecruiterProfile;

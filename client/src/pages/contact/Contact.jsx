import React from "react";
import Box from "@mui/material/Box";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  TextField,
  Typography,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const Contact = () => {
  return (
    <div>
      <section>
        <Container>
          <Box
            sx={{
              py: 10,
              display: { xs: "row", md: "flex" },
              justifyContent: "space-between",
              gap: 10,
            }}
          >
            <Box sx={{ mb: 5, width: { md: "50%" } }}>
              <Typography variant="h4" gutterBottom>
                We care about customer services
              </Typography>
              <Typography gutterBottom>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi
                voluptatibus est voluptas eaque dolorum voluptate, laborum
                expedita ullam magni reprehenderit?
              </Typography>
              <Typography gutterBottom>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
                hic eaque numquam reiciendis consectetur a repellat culpa
                nesciunt corrupti sequi error nobis laborum impedit voluptatum
                doloremque quia sed ab non quidem? Repellat voluptates eum
                aspernatur facilis totam, mollitia error, commodi illo porro
                ipsa corrupti quibusdam quasi rem labore corporis ab.
              </Typography>
              <Button variant="contained" sx={{ textTransform: "none" }}>
                Email Support
              </Button>
            </Box>
            <Box sx={{ width: { md: "50%" } }}>
              <Card sx={{ width: "100%", boxShadow: 8 }}>
                <CardContent>
                  <Typography variant="h5" sx={{ fontWeight: "bold", py: 2 }}>
                    Get in Touch
                  </Typography>
                  <Box sx={{ display: "flex", gap: 1 }}>
                    <TextField
                      margin="dense"
                      id="name"
                      label="Name"
                      variant="outlined"
                      sx={{ width: "100%" }}
                    />
                    <TextField
                      margin="dense"
                      id="name"
                      label="Email"
                      type="email"
                      variant="outlined"
                      sx={{ width: "100%" }}
                    />
                  </Box>
                  <TextField
                    id="subject"
                    label="Subject"
                    margin="dense"
                    variant="outlined"
                    sx={{ width: "100%" }}
                  />
                  <TextField
                    id="message"
                    label="Message "
                    multiline
                    fullWidth
                    margin="dense"
                    rows={4}
                  />
                  <Button
                    sx={{ width: "100%", mt: 1 }}
                    variant="contained"
                    endIcon={<SendIcon />}
                  >
                    Send Message
                  </Button>
                </CardContent>
              </Card>
            </Box>
          </Box>
        </Container>
      </section>

      {/* <section>
        <Box>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d31682.45805175636!2d79.9080448!3d6.9730304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2slk!4v1737655103553!5m2!1sen!2slk"
            width="100%"
            height="250px"
            border="none"
          ></iframe>
        </Box>
      </section> */}
    </div>
  );
};

export default Contact;

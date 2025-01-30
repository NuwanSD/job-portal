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

      <section>
        <Container>
          <Box sx={{ py: 10 }}>
            <iframe
              width="100%"
              height="400"
              frameborder="0"
              marginheight="0"
              marginwidth="0"
              id="gmap_canvas"
              src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=%20Gampaha+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            ></iframe>
          </Box>
        </Container>
      </section>
    </div>
  );
};

export default Contact;

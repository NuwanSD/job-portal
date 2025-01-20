import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

function Testimonial() {
  const [value, setValue] = React.useState(5);
  return (
    <Box
      sx={{
        width: "100%",
        display: { xs: "row", md: "flex" },
        gap: 5,
      }}
    >
      <Card sx={{ mt: 2 }}>
        <CardContent sx={{ height: "100%" }}>
          <Box>
            <Rating name="read-only" value={value} readOnly />
            <Typography variant="h6" component="div">
              Lorem ipsum dolor sit amet.
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Temporibus, porro?
            </Typography>
          </Box>
          <Stack direction="row" spacing={2} sx={{ mt: 5 }}>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            <Box>
              <p>Name here</p>
              <p>Position</p>
            </Box>
          </Stack>
        </CardContent>
      </Card>
      <Card sx={{ mt: 2 }}>
        <CardContent sx={{ height: "100%" }}>
          <Box>
            <Rating name="read-only" value={value} readOnly />
            <Typography variant="h6" component="div">
              Lorem ipsum dolor sit amet.
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Temporibus, porro?
            </Typography>
          </Box>
          <Stack direction="row" spacing={2} sx={{ mt: 5 }}>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            <Box>
              <p>Name here</p>
              <p>Position</p>
            </Box>
          </Stack>
        </CardContent>
      </Card>
      <Card sx={{ mt: 2 }}>
        <CardContent sx={{ height: "100%" }}>
          <Box>
            <Rating name="read-only" value={value} readOnly />
            <Typography variant="h6" component="div">
              Lorem ipsum dolor sit amet.
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Temporibus, porro?
            </Typography>
          </Box>
          <Stack direction="row" spacing={2} sx={{ mt: 5 }}>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            <Box>
              <p>Name here</p>
              <p>Position</p>
            </Box>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
}

export default Testimonial;

import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

const testimonials = [
  {
    name: "Sam Partol",
    role: "Cloud Engineer",
    avatar: "/static/images/avatar/1.jpg",
    title: "Lorem ipsum dolor sit amet.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus, porro?",
  },
  {
    name: "Brunin Besiy",
    role: "Software Engineer",
    avatar: "/static/images/avatar/1.jpg",
    title: "Lorem ipsum dolor sit amet.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus, porro?",
  },
  {
    name: "John Doe",
    role: "Graphic Designer",
    avatar: "/static/images/avatar/1.jpg",
    title: "Lorem ipsum dolor sit amet.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus, porro?",
  },
];

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
      {testimonials.map((testimonial, index) => (
        <Card key={index} sx={{ py: 2, mt: { xs: 2, md: 0 } }}>
          <CardContent sx={{ height: "100%" }}>
            <Box>
              <Rating name="read-only" value={value} readOnly />
              <Typography variant="h6" component="div">
                {testimonial.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {testimonial.description}
              </Typography>
            </Box>
            <Stack direction="row" spacing={2} sx={{ mt: 3 }}>
              <Avatar alt={testimonial.name} src={testimonial.avatar} />
              <Box>
                <p>{testimonial.name}</p>
                <Typography variant="subtitle2">{testimonial.role}</Typography>
              </Box>
            </Stack>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}

export default Testimonial;

import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

const jobs = [
  { id: 1, title: "Software Engineer", description: "41,523 open positions" },
  { id: 2, title: "Data Scientist", description: "30,789 open positions" },
  { id: 3, title: "Product Manager", description: "12,345 open positions" },
  { id: 4, title: "UX Designer", description: "9,876 open positions" },
  { id: 5, title: "DevOps Engineer", description: "5,432 open positions" },
  { id: 6, title: "Marketing Manager", description: "7,890 open positions" },
  { id: 7, title: "Sales Executive", description: "6,789 open positions" },
  {
    id: 8,
    title: "Customer Support ",
    description: "10,123 open positions",
  },
];

function SelectActionCard() {
  const [selectedCard, setSelectedCard] = React.useState(0);
  return (
    <Box
      sx={{
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(min(200px, 100%), 1fr))",
        gap: 5,
      }}
    >
      {jobs.map((job, index) => (
        <Card>
          <CardActionArea
            onClick={() => setSelectedCard(index)}
            data-active={selectedCard === index ? "" : undefined}
            sx={{
              height: "100%",
              "&[data-active]": {
                backgroundColor: "action.selected",
                "&:hover": {
                  backgroundColor: "action.selectedHover",
                },
              },
            }}
          >
            <CardContent sx={{ height: "100%" }}>
              <Typography variant="h6" component="div">
                {job.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {job.description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </Box>
  );
}

export default SelectActionCard;

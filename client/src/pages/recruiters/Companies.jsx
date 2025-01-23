import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import Logo from "../../assets/facebook.svg";

const companies = [
  {
    id: 1,
    name: "Facebook",
    location: "Perth, Australia",
    available: 4,
    logo: Logo,
  },
  {
    id: 2,
    name: "Facebook",
    location: "Perth, Australia",
    available: 4,
    logo: Logo,
  },
  {
    id: 3,
    name: "Facebook",
    location: "Perth, Australia",
    available: 4,
    logo: Logo,
  },
  {
    id: 4,
    name: "Facebook",
    location: "Perth, Australia",
    available: 4,
    logo: Logo,
  },
  {
    id: 5,
    name: "Facebook",
    location: "Perth, Australia",
    available: 4,
    logo: Logo,
  },
  {
    id: 6,
    name: "Facebook",
    location: "Perth, Australia",
    available: 4,
    logo: Logo,
  },
  {
    id: 7,
    name: "Facebook",
    location: "Perth, Australia",
    available: 4,
    logo: Logo,
  },
  {
    id: 8,
    name: "Facebook",
    location: "Perth, Australia",
    available: 4,
    logo: Logo,
  },
  {
    id: 8,
    name: "Facebook",
    location: "Perth, Australia",
    available: 4,
    logo: Logo,
  },
  {
    id: 8,
    name: "Facebook",
    location: "Perth, Australia",
    available: 4,
    logo: Logo,
  },
  {
    id: 8,
    name: "Facebook",
    location: "Perth, Australia",
    available: 4,
    logo: Logo,
  },
];

function Companies() {
  return (
    <Box
      sx={{
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(min(250px, 100%), 1fr))",
        gap: 3,
      }}
    >
      {companies.map((company) => (
        <Card key={company.id} variant="outlined" sx={{ borderRadius: 2 }}>
          <CardContent sx={{ height: "100%" }}>
            <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
              <img src={company.logo} alt="" width={82} />
              <Box>
                <Typography variant="h6" component="div" sx={{ ml: 0.5 }}>
                  {company.name}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <LocationOnOutlinedIcon />
                  {company.location}
                </Typography>
              </Box>
            </Box>
            <Button variant="outlined" sx={{ mt: 2, width: "100%" }}>
              Open Position ({company.available})
            </Button>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}

export default Companies;

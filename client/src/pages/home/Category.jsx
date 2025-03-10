import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import ConstructionOutlinedIcon from "@mui/icons-material/ConstructionOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import HealthAndSafetyOutlinedIcon from "@mui/icons-material/HealthAndSafetyOutlined";
import DevicesOutlinedIcon from "@mui/icons-material/DevicesOutlined";
import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";

const jobCategories = [
  {
    id: 1,
    icon: <AccountBalanceOutlinedIcon sx={{ color: "#1976D2", scale: 1.5 }} />,
    title: "Accounting & Finance",
    description: "41,523 open positions",
  },
  {
    id: 2,
    icon: (
      <AdminPanelSettingsOutlinedIcon sx={{ color: "#1976D2", scale: 1.5 }} />
    ),
    title: "Administration & Office Support",
    description: "30,789 open positions",
  },
  {
    id: 3,
    icon: <ConstructionOutlinedIcon sx={{ color: "#1976D2", scale: 1.5 }} />,
    title: "Construction & Building Services",
    description: "12,345 open positions",
  },
  {
    id: 4,
    icon: <SchoolOutlinedIcon sx={{ color: "#1976D2", scale: 1.5 }} />,
    title: "Education & Training",
    description: "9,876 open positions",
  },
  {
    id: 5,
    icon: <HealthAndSafetyOutlinedIcon sx={{ color: "#1976D2", scale: 1.5 }} />,
    title: "Healthcare & Medical",
    description: "5,432 open positions",
  },
  {
    id: 6,
    icon: <DevicesOutlinedIcon sx={{ color: "#1976D2", scale: 1.5 }} />,
    title: "IT & Telecommunications",
    description: "7,890 open positions",
  },
  {
    id: 7,
    icon: <BorderColorOutlinedIcon sx={{ color: "#1976D2", scale: 1.5 }} />,
    title: "Marketing & Communications",
    description: "6,789 open positions",
  },
  {
    id: 8,
    icon: (
      <LocalGroceryStoreOutlinedIcon sx={{ color: "#1976D2", scale: 1.5 }} />
    ),
    title: "Retail & Consumer Products",
    description: "10,123 open positions",
  },
];

function Category() {
  return (
    <Box
      sx={{
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(min(250px, 100%), 1fr))",
        gap: 3,
      }}
    >
      {jobCategories.map((job) => (
        <Card key={job.id} variant="outlined" sx={{ alignContent: "center" }}>
          <CardContent
            sx={{
              display: "flex",
              gap: 2,
              alignItems: "center",
            }}
          >
            <Box>{job.icon}</Box>
            <Box>
              <Typography variant="h7" sx={{ fontWeight: "medium" }}>
                {job.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {job.description}
              </Typography>
            </Box>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}

export default Category;

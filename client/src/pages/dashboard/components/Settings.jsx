import React, { useState } from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";

import Account from "../components/settings/Account";
import Social from "../components/settings/Social";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ py: 4 }}>{children}</Box>}
    </div>
  );
}

export default function Settings() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const renderContent = () => {
    switch (value) {
      case 0:
        return <Account />;
      case 1:
        return <Social />;
      default:
        return <Account />;
    }
  };

  return (
    <Box sx={{ py: 8 }}>
      <Typography variant="h6" gutterBottom>
        Settings
      </Typography>

      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="settings tabs"
          >
            <Tab label="Account Setting" {...a11yProps(0)} />
            <Tab label="Social Links" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          {renderContent()}
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          {renderContent()}
        </CustomTabPanel>
      </Box>
    </Box>
  );
}

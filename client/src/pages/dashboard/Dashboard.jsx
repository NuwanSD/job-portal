import React, { useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Container } from "@mui/material";

import Overview from "./components/Overview";
import AppliedJob from "./components/AppliedJobs";
import FavoriteJobs from "./components/FavoriteJobs";
import JobAlert from "./components/JobAlert";
import Setting from "./components/Settings";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const Dashboard = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Container>
      <Box
        sx={{
          flexGrow: 1,
          bgcolor: "background.paper",
          display: "flex",
          height: "100vh",
        }}
      >
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{
            borderRight: 1,
            borderColor: "divider",
            py: 10,
          }}
        >
          <Tab label="Overview" {...a11yProps(0)} />
          <Tab label="Appied Jobs" {...a11yProps(1)} />
          <Tab label="Favorite Jobs" {...a11yProps(2)} />
          <Tab label="Job Alert" {...a11yProps(3)} />
          <Tab label="Settings" {...a11yProps(4)} />
        </Tabs>
        <Box sx={{ width: "100%" }}>
          <TabPanel value={value} index={0}>
            <Overview />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <AppliedJob />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <FavoriteJobs />
          </TabPanel>
          <TabPanel value={value} index={3}>
            <JobAlert />
          </TabPanel>
          <TabPanel value={value} index={4}>
            <Setting />
          </TabPanel>
        </Box>
      </Box>
    </Container>
  );
};

export default Dashboard;

import React, { useState } from "react";
import Box from "@mui/material/Box";

import Overview from "./components/Overview";
import AppliedJob from "./components/AppliedJobs";
import FavoriteJobs from "./components/FavoriteJobs";
import JobAlert from "./components/JobAlert";
import Setting from "./components/Settings";
import Sidebar from "./components/Sidebar";
import { Container, Divider } from "@mui/material";

const Dashboard = () => {
  const [selectedTab, setSelectedTab] = useState("Overview");

  const renderContent = () => {
    switch (selectedTab) {
      case "Overview":
        return <Overview key="overview" />;
      case "Applied Jobs":
        return <AppliedJob key="appliedJob" />;
      case "Favorite Jobs":
        return <FavoriteJobs key="favoriteJob" />;
      case "Job Alert":
        return <JobAlert key="jobAlert" />;
      case "Settings":
        return <Setting key="settings" />;
      default:
        return <Overview key="default" />;
    }
  };

  return (
    <Container sx={{ display: "flex", gap: 5 }}>
      <Box>
        <Sidebar setSelectedTab={setSelectedTab} />
      </Box>
      <Divider orientation="vertical" flexItem />
      <Box sx={{ flexGrow: 1 }}>{renderContent()}</Box>
    </Container>
  );
};

export default Dashboard;

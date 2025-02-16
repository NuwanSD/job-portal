import React, { useState } from "react";

import { Box, Container, Divider } from "@mui/material";

import Overview from "./components/Overview";
import PostJob from "./components/PostJob";
import MyJobs from "./components/MyJobs";
import SavedCandidates from "./components/SavedCandidates";
import Setting from "./components/Settings";

import Sidebar from "./components/Sidebar";

const Dashboard = () => {
  const [selectedTab, setSelectedTab] = useState("Overview");

  const renderContent = () => {
    switch (selectedTab) {
      case "Overview":
        return <Overview key="overview" />;
      case "Post Jobs":
        return <PostJob key="PostJob" />;
      case "My Jobs":
        return <MyJobs key="MyJobs" />;
      case "Saved Candidates":
        return <SavedCandidates key="SavedCandidates" />;
      case "Settings":
        return <Setting key="settings" />;
      default:
        return <Overview key="default" />;
    }
  };

  return (
    <Container sx={{ display: "flex", gap: 2 }}>
      <Box>
        <Sidebar setSelectedTab={setSelectedTab} />
      </Box>
      <Divider orientation="vertical" flexItem />
      <Box sx={{ flexGrow: 1 }}>{renderContent()}</Box>
    </Container>
  );
};

export default Dashboard;

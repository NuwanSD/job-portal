import React, { useState } from "react";

import { Box, Container, Divider } from "@mui/material";

import Overview from "./components/Overview";
import MyJobs from "./components/MyJobs";
import SavedCandidates from "./components/SavedCandidates";
import Setting from "./components/Settings";

import Sidebar from "./components/Sidebar";
import Application from "./components/Application";
import { useAuthStore } from "../../store/authStore";

const Dashboard = () => {
  const [selectedTab, setSelectedTab] = useState("Overview");

  const { auth } = useAuthStore();

  const user_id = auth.userId;

  const renderContent = () => {
    switch (selectedTab) {
      case "Overview":
        return <Overview key="overview" />;
      case "My Jobs":
        return <MyJobs key="MyJobs" user_id={user_id} />;
      case "Saved Candidates":
        return <SavedCandidates key="SavedCandidates" />;
      case "Job Application":
        return <Application key="JobApplications" user_id={user_id} />;
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

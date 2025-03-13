import React, { useState } from "react";

import { Box, Container, Divider } from "@mui/material";

import Personl from "./Personal";
import Photo from "./Photo";
import Setting from "./Settings";
import Founding from "./Founding";

import Sidebar from "./Sidebar";

const Profile = () => {
  const [selectedTab, setSelectedTab] = useState("Overview");

  const renderContent = () => {
    switch (selectedTab) {
      case "Personal":
        return <Personl />;
      case "Founding":
        return <Founding />;
      case "Photo":
        return <Photo />;
      case "Settings":
        return <Setting />;
      default:
        return <Personl />;
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

export default Profile;

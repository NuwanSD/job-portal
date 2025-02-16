import React from "react";
import PropTypes from "prop-types";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import LayersOutlinedIcon from "@mui/icons-material/LayersOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import BookmarksOutlinedIcon from "@mui/icons-material/BookmarksOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

const Sidebar = ({ setSelectedTab }) => {
  const handleListItemClick = (event, tabName) => {
    setSelectedTab(tabName);
  };

  return (
    <List component="nav" sx={{ position: "sticky", top: 0, py: 7 }}>
      <ListItem>
        <ListItemButton
          sx={{ gap: 1 }}
          onClick={(event) => handleListItemClick(event, "Overview")}
        >
          <LayersOutlinedIcon />
          <ListItemText primary="Overview" />
        </ListItemButton>
      </ListItem>
      <ListItem>
        <ListItemButton
          sx={{ gap: 1 }}
          onClick={(event) => handleListItemClick(event, "Post Jobs")}
        >
          <AddCircleOutlineOutlinedIcon />
          <ListItemText primary="Post Jobs" />
        </ListItemButton>
      </ListItem>
      <ListItem>
        <ListItemButton
          sx={{ gap: 1 }}
          onClick={(event) => handleListItemClick(event, "My Jobs")}
        >
          <WorkOutlineOutlinedIcon />
          <ListItemText primary="My Jobs" />
        </ListItemButton>
      </ListItem>
      <ListItem>
        <ListItemButton
          sx={{ gap: 1 }}
          onClick={(event) => handleListItemClick(event, "Saved Candidates")}
        >
          <BookmarksOutlinedIcon />
          <ListItemText primary="Saved Candidates" />
        </ListItemButton>
      </ListItem>
      <ListItem>
        <ListItemButton
          sx={{ gap: 1 }}
          onClick={(event) => handleListItemClick(event, "Settings")}
        >
          <SettingsOutlinedIcon />
          <ListItemText primary="Settings" />
        </ListItemButton>
      </ListItem>
    </List>
  );
};

Sidebar.propTypes = {
  setSelectedTab: PropTypes.func.isRequired,
};

export default Sidebar;

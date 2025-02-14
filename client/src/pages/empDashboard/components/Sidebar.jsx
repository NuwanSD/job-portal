import React from "react";
import PropTypes from "prop-types";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

const Sidebar = ({ setSelectedTab }) => {
  const handleListItemClick = (event, tabName) => {
    setSelectedTab(tabName);
  };

  return (
    <List component="nav" sx={{ position: "sticky", top: 0, py: 7 }}>
      <ListItem>
        <ListItemButton
          onClick={(event) => handleListItemClick(event, "Overview")}
        >
          <ListItemText primary="Overview" />
        </ListItemButton>
      </ListItem>
      <ListItem>
        <ListItemButton
          onClick={(event) => handleListItemClick(event, "Post Jobs")}
        >
          <ListItemText primary="Post Jobs" />
        </ListItemButton>
      </ListItem>
      <ListItem>
        <ListItemButton
          onClick={(event) => handleListItemClick(event, "My Jobs")}
        >
          <ListItemText primary="My Jobs" />
        </ListItemButton>
      </ListItem>
      <ListItem>
        <ListItemButton
          onClick={(event) => handleListItemClick(event, "Saved Candidates")}
        >
          <ListItemText primary="Saved Candidates" />
        </ListItemButton>
      </ListItem>
      <ListItem>
        <ListItemButton
          onClick={(event) => handleListItemClick(event, "Settings")}
        >
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

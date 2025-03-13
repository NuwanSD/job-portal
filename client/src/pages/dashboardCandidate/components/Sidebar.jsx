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
          onClick={(event) => handleListItemClick(event, "Applied Jobs")}
        >
          <ListItemText primary="Applied Jobs" />
        </ListItemButton>
      </ListItem>
      <ListItem>
        <ListItemButton
          onClick={(event) => handleListItemClick(event, "Favorite Jobs")}
        >
          <ListItemText primary="Favorite Jobs" />
        </ListItemButton>
      </ListItem>
      <ListItem>
        <ListItemButton
          onClick={(event) => handleListItemClick(event, "Job Alert")}
        >
          <ListItemText primary="Job Alert" />
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

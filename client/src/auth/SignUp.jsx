import * as React from "react";
import {
  Box,
  TextField,
  Typography,
  Card,
  CardContent,
  Button,
  Link,
  Divider,
} from "@mui/material";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Recruiter from "./Recruiter";
import JobSeeker from "./JobSeeker";

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
      {value === index && <Box sx={{ py: 5 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const SignUp = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ width: "100%", py: 10, display: "flex", justifyContent: "center" }}
    >
      <Card variant="outlined" sx={{ width: "400px", borderRadius: 2 }}>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Create account
          </Typography>
          <Typography gutterBottom variant="body2" color="textSecondary">
            Enter below details to register the program
          </Typography>
          <Box
            sx={{
              borderBottom: 1,
              borderColor: "divider",
              bgcolor: "#f7f7f8",
              mt: 2,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="Candidate" {...a11yProps(0)} />
              <Tab label="Employers" {...a11yProps(1)} />
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
            <JobSeeker />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <Recruiter />
          </CustomTabPanel>
          <Divider sx={{ my: 2 }} />
          <Typography gutterBottom variant="body2" color="textSecondary">
            Already have account? <Link href="/login">Login</Link>
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default SignUp;

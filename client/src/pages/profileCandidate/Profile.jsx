import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  Button,
  Container,
  Divider,
  TextField,
  Typography,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import User from "../../assets/user.png";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Personal from "./Personal";
import FileUpload from "./FileUpload";
import Settings from "./Settings";
import { updateUser } from "../../helper/helper";
import useFetch from "../../hook/fetch.hook";

const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z
    .string()
    .min(1, "Phone number should be at least 10 characters long"),
  city: z.string().min(1, "City is required"),
  country: z.string().min(1, "Country is required"),
});

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

const Profile = () => {
  const [value, setValue] = useState(0);

  const [{ isLoading, apiData, serverError }] = useFetch();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const renderContent = () => {
    switch (value) {
      case 0:
        return <Personal key="personal" />;
      case 1:
        return <FileUpload key="fileUpload" />;
      case 2:
        return <Settings key="setting" />;
      default:
        return <Personal key="default" />;
    }
  };

  const params = useParams();

  //console.log(params);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      city: "",
      country: "",
    },
  });

  useEffect(() => {
    if (apiData) {
      form.reset({
        name: apiData.name,
        email: apiData.email,
        phone: apiData.phone,
        city: apiData.city,
        country: apiData.country,
      });
    }
  }, [apiData]);

  //Do not change this works fine using
  const onSubmit = async (values) => {
    const response = await updateUser(values);
    console.log(response);
  };

  return (
    <div>
      <Container>
        <Typography sx={{ mt: 10 }} variant="h5">
          Your Profile
        </Typography>

        <Box
          sx={{
            py: 10,
            display: { xs: "row", md: "flex" },
            gap: 5,
            width: "100%",
          }}
        >
          <Box sx={{}}>
            <Card sx={{ width: "350px" }} variant="outlined">
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignContent: "center",
                  alignItems: "center",
                }}
              >
                <Box>
                  <img src={User} width="250px" />
                </Box>
                <Box
                  component="form"
                  onSubmit={form.handleSubmit(onSubmit)}
                  sx={{ pt: 2 }}
                >
                  <Typography variant="h6" gutterBottom>
                    Name:
                  </Typography>
                  <Controller
                    name="name"
                    control={form.control}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        margin="dense"
                        label="Name"
                        size="small"
                        error={!!form.formState.errors.name}
                        helperText={form.formState.errors.name?.message}
                        sx={{ width: "100%" }}
                      />
                    )}
                  />
                  <Typography variant="h6" gutterBottom>
                    Email:
                  </Typography>
                  <Controller
                    name="email"
                    control={form.control}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        margin="dense"
                        label="Email"
                        size="small"
                        error={!!form.formState.errors.email}
                        helperText={form.formState.errors.email?.message}
                        sx={{ width: "100%" }}
                      />
                    )}
                  />
                  <Typography variant="h6" gutterBottom>
                    Phone:
                  </Typography>
                  <Controller
                    name="phone"
                    control={form.control}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        margin="dense"
                        label="Phone"
                        size="small"
                        error={!!form.formState.errors.phone}
                        helperText={form.formState.errors.phone?.message}
                        sx={{ width: "100%" }}
                      />
                    )}
                  />
                  <Typography variant="h6" gutterBottom>
                    City:
                  </Typography>
                  <Controller
                    name="city"
                    control={form.control}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        margin="dense"
                        label="City"
                        size="small"
                        error={!!form.formState.errors.city}
                        helperText={form.formState.errors.city?.message}
                        sx={{ width: "100%" }}
                      />
                    )}
                  />
                  <Typography variant="h6" gutterBottom>
                    Country:
                  </Typography>
                  <Controller
                    name="country"
                    control={form.control}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        margin="dense"
                        size="small"
                        label="Country"
                        error={!!form.formState.errors.country}
                        helperText={form.formState.errors.country?.message}
                        sx={{ width: "100%" }}
                      />
                    )}
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{ textTransform: "none", width: "100%", mt: 1 }}
                  >
                    Save Chanages
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Box>

          <Box sx={{ mt: { xs: 4, sm: 2, md: 0 }, width: "100%" }}>
            <Box sx={{ width: "100%" }}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="basic tabs example"
                >
                  <Tab label="Personal" {...a11yProps(0)} />
                  <Tab label="Photo" {...a11yProps(1)} />
                  <Tab label="Other Settings" {...a11yProps(2)} />
                </Tabs>
              </Box>
              <CustomTabPanel value={value} index={0}>
                {renderContent()}
              </CustomTabPanel>
              <CustomTabPanel value={value} index={1}>
                {renderContent()}
              </CustomTabPanel>
              <CustomTabPanel value={value} index={2}>
                {renderContent()}
              </CustomTabPanel>
            </Box>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default Profile;

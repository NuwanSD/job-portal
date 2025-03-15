import React from "react";
import { Typography, Box, TextField, Button } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Cover from "../../assets/banner-img.jpg";
import Logo from "../../assets/facebook.svg";

const formSchema = z.object({});

const Personal = () => {
  //Get user from localStorage
  const result = localStorage.getItem("user");

  const user = result ? JSON.parse(result) : null;

  const form = useForm({
    //resolver: zodResolver(formSchema),
    defaultValues: user
      ? {
          user_id: user.user_id,
          username: user.username,
          name: user.name,
          email: user.email,
          phone: user.phone,
          city: user.city,
          country: user.country,
        }
      : undefined,
  });

  async function onSubmit(values) {
    try {
      console.log(values);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Box sx={{ width: "100%", py: 10 }}>
      <Box
        sx={{
          display: { xs: "row", md: "flex" },
          gap: 2,
          mb: 5,
          alignItems: "center",
        }}
      >
        <Box sx={{ border: 1, display: "inline-block", mb: { xs: 1, md: 0 } }}>
          <img src={Logo} alt="" height="150px" />
        </Box>
        <img src={Cover} alt="" height="150px" width="100%" />
      </Box>

      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Typography sx={{ fontWeight: "bold" }} gutterBottom>
          USERNAME
        </Typography>
        <Controller
          name="username"
          control={form.control}
          render={({ field }) => (
            <TextField
              {...field}
              margin="dense"
              label="Username"
              size="small"
              multiline
              error={!!form.formState.errors.username}
              helperText={form.formState.errors.username?.message}
              sx={{ width: "100%" }}
            />
          )}
        />

        <Typography sx={{ fontWeight: "bold", mt: 4 }} gutterBottom>
          ORGANIZATIONAL NAME
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
              multiline
              error={!!form.formState.errors.name}
              helperText={form.formState.errors.name?.message}
              sx={{ width: "100%" }}
            />
          )}
        />

        <Box sx={{ my: 4 }}>
          <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
            <Box sx={{ width: "100%" }}>
              <Typography variant="h6" gutterBottom>
                Contact Number
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
            </Box>
            <Box sx={{ width: "100%" }}>
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
            </Box>
          </Box>
          <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
            <Box sx={{ width: "100%" }}>
              <Typography variant="h6" gutterBottom>
                City
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
            </Box>
            <Box sx={{ width: "100%" }}>
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
                    label="Country"
                    size="small"
                    error={!!form.formState.errors.country}
                    helperText={form.formState.errors.country?.message}
                    sx={{ width: "100%" }}
                  />
                )}
              />
            </Box>
          </Box>

          <Button
            type="submit"
            variant="contained"
            sx={{ textTransform: "none", width: "100%", mt: 1 }}
          >
            Save Chanages
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default Personal;

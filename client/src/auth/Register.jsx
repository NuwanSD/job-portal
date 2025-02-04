import React from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useLocation } from "react-router-dom";

const formSchema = z
  .object({
    username: z.string().min(1, "Username is required"),
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email address"),
    phone: z.string().min(1, "Phone is required"),
    city: z.string().min(1, "City is required"),
    country: z.string().min(1, "Country is required"),
    password: z.string().min(1, "Password must be at least 6 characters"),
    confirmPassword: z
      .string()
      .min(1, "Confirm Password must be at least 6 characters"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"], // Path of error
  });

const Register = () => {
  //include user_id --> this would be primary key in DB
  const location = useLocation();

  const role = location.state?.role || "";

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      name: "",
      email: "",
      phone: "",
      city: "",
      country: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (values) => {
    const formatedValues = { ...values, role: role };
    console.log(formatedValues);
    form.reset();
  };

  return (
    <Box sx={{ my: 10, alignItems: "center" }}>
      <Box sx={{ textAlign: "center", mb: 5 }}>
        <Typography variant="h5" gutterBottom>
          Sign up to hire talent
        </Typography>
        <Typography color="textSecondary">
          Fill details below to register the program
        </Typography>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box
          component="form"
          onSubmit={form.handleSubmit(onSubmit)}
          sx={{ width: "400px" }}
        >
          <Controller
            name="username"
            control={form.control}
            render={({ field }) => (
              <TextField
                {...field}
                margin="dense"
                label="Username"
                variant="outlined"
                error={!!form.formState.errors.username}
                helperText={form.formState.errors.username?.message}
                sx={{ width: "100%" }}
              />
            )}
          />
          <Controller
            name="name"
            control={form.control}
            render={({ field }) => (
              <TextField
                {...field}
                margin="dense"
                label="Name"
                variant="outlined"
                error={!!form.formState.errors.name}
                helperText={form.formState.errors.name?.message}
                sx={{ width: "100%" }}
              />
            )}
          />
          <Controller
            name="email"
            control={form.control}
            render={({ field }) => (
              <TextField
                {...field}
                margin="dense"
                label="Email"
                variant="outlined"
                error={!!form.formState.errors.email}
                helperText={form.formState.errors.email?.message}
                sx={{ width: "100%" }}
              />
            )}
          />
          <Controller
            name="phone"
            control={form.control}
            render={({ field }) => (
              <TextField
                {...field}
                margin="dense"
                label="Phone"
                variant="outlined"
                error={!!form.formState.errors.phone}
                helperText={form.formState.errors.phone?.message}
                sx={{ width: "100%" }}
              />
            )}
          />
          <Controller
            name="city"
            control={form.control}
            render={({ field }) => (
              <TextField
                {...field}
                margin="dense"
                label="City"
                variant="outlined"
                error={!!form.formState.errors.city}
                helperText={form.formState.errors.city?.message}
                sx={{ width: "100%" }}
              />
            )}
          />
          <Controller
            name="country"
            control={form.control}
            render={({ field }) => (
              <TextField
                {...field}
                margin="dense"
                label="Country"
                variant="outlined"
                error={!!form.formState.errors.country}
                helperText={form.formState.errors.country?.message}
                sx={{ width: "100%" }}
              />
            )}
          />
          <Controller
            name="password"
            control={form.control}
            render={({ field }) => (
              <TextField
                {...field}
                margin="dense"
                label="Password"
                variant="outlined"
                type="password"
                error={!!form.formState.errors.password}
                helperText={form.formState.errors.password?.message}
                sx={{ width: "100%" }}
              />
            )}
          />
          <Controller
            name="confirmPassword"
            control={form.control}
            render={({ field }) => (
              <TextField
                {...field}
                margin="dense"
                label="Confirm Password"
                variant="outlined"
                type="password"
                error={!!form.formState.errors.confirmPassword}
                helperText={form.formState.errors.confirmPassword?.message}
                sx={{ width: "100%" }}
              />
            )}
          />
          <Button
            type="submit"
            variant="contained"
            sx={{ mt: 1, width: "100%", textTransform: "none" }}
          >
            Sign Up
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Register;

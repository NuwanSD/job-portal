import React from "react";
import { useForm, Controller } from "react-hook-form";
import { Box, TextField, Button } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const JobSeeker = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{ width: "400px", borderRadius: 2 }}
      >
        <Controller
          name="username"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              margin="dense"
              label="Username"
              variant="outlined"
              type="text"
              sx={{ width: "100%" }}
              error={!!errors.username}
              helperText={errors.username ? "Username is required" : ""}
            />
          )}
          rules={{ required: true }}
        />
        <Controller
          name="name"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              margin="dense"
              label="Name"
              variant="outlined"
              type="text"
              sx={{ width: "100%" }}
              error={!!errors.name}
              helperText={errors.name ? "Name is required" : ""}
            />
          )}
          rules={{ required: true }}
        />
        <Controller
          name="email"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              margin="dense"
              label="Email"
              variant="outlined"
              type="email"
              sx={{ width: "100%" }}
              error={!!errors.email}
              helperText={errors.email ? "Email is required" : ""}
            />
          )}
          rules={{ required: true }}
        />
        <Controller
          name="phone"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              margin="dense"
              label="Phone"
              variant="outlined"
              type="text"
              sx={{ width: "100%" }}
              error={!!errors.phone}
              helperText={errors.phone ? "Phone is required" : ""}
            />
          )}
          rules={{ required: true }}
        />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Controller
            name="birth_date"
            control={control}
            defaultValue={null}
            render={({ field }) => (
              <DatePicker
                {...field}
                label="Date of Birth"
                slotProps={{
                  textField: {
                    margin: "dense",
                    sx: { width: "100%" },
                    error: !!errors.birth_date,
                    helperText: errors.birth_date
                      ? "Date of Birth is required"
                      : "",
                  },
                }}
              />
            )}
            rules={{ required: true }}
          />
        </LocalizationProvider>
        <Controller
          name="city"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              margin="dense"
              label="City"
              variant="outlined"
              type="text"
              sx={{ width: "100%" }}
              error={!!errors.city}
              helperText={errors.city ? "City is required" : ""}
            />
          )}
          rules={{ required: true }}
        />
        <Controller
          name="country"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              margin="dense"
              label="Country"
              variant="outlined"
              type="text"
              sx={{ width: "100%" }}
              error={!!errors.country}
              helperText={errors.country ? "Country is required" : ""}
            />
          )}
          rules={{ required: true }}
        />
        <Controller
          name="password"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              margin="dense"
              label="Password"
              variant="outlined"
              type="password"
              sx={{ width: "100%" }}
              error={!!errors.password}
              helperText={errors.password ? "Password is required" : ""}
            />
          )}
          rules={{ required: true }}
        />
        <Controller
          name="confirmPassword"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              margin="dense"
              label="Confirm Password"
              variant="outlined"
              type="password"
              sx={{ width: "100%" }}
              error={!!errors.confirmPassword}
              helperText={
                errors.confirmPassword ? "Confirm Password is required" : ""
              }
            />
          )}
          rules={{ required: true }}
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
  );
};

export default JobSeeker;

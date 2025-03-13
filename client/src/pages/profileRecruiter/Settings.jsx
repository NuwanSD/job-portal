import React from "react";
import { Box, TextField, Button, Typography, Divider } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";

const formSchema = z
  .object({
    currentPassword: z
      .string()
      .min(6, "Current Password must be at least 6 characters"),
    newPassword: z
      .string()
      .min(6, "New Password must be at least 6 characters"),
    confirmPassword: z
      .string()
      .min(6, "Confirm Password must be at least 6 characters"),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"], // Path of error
  });

const Settings = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (values) => {
    const formatedValues = { ...values, role: role };
    console.log(formatedValues);
    form.reset();
  };

  return (
    <Box
      sx={{
        width: "100%",
        py: 8,
      }}
    >
      <Box component="form" onSubmit={form.handleSubmit(onSubmit)}>
        <Typography variant="h6" gutterBottom>
          Change Password
        </Typography>

        <Box sx={{ display: "flex", gap: 2 }}>
          <Controller
            name="currentPassword"
            control={form.control}
            render={({ field }) => (
              <TextField
                {...field}
                margin="dense"
                label="Password"
                variant="outlined"
                type="password"
                size="small"
                error={!!form.formState.errors.currentPassword}
                helperText={form.formState.errors.currentPassword?.message}
                sx={{ width: "100%" }}
              />
            )}
          />

          <Controller
            name="newPassword"
            control={form.control}
            render={({ field }) => (
              <TextField
                {...field}
                margin="dense"
                label="New Password"
                variant="outlined"
                type="password"
                size="small"
                error={!!form.formState.errors.newPassword}
                helperText={form.formState.errors.newPassword?.message}
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
                size="small"
                error={!!form.formState.errors.confirmPassword}
                helperText={form.formState.errors.confirmPassword?.message}
                sx={{ width: "100%" }}
              />
            )}
          />
        </Box>

        <Button
          type="submit"
          variant="contained"
          sx={{ mt: 1, textTransform: "none" }}
        >
          Change Password
        </Button>
      </Box>

      <Divider sx={{ my: 3 }} />

      <Box>
        <Typography variant="h6" gutterBottom>
          Delete Your Account:
        </Typography>

        <Typography variant="body2" color="textSecondary" gutterBottom>
          If you delete your account, you will no longer be able to get
          information about the matched jobs, following employers, and job
          alert, shortlisted jobs and more. You will be abandoned from all the
          services.
        </Typography>

        <Button
          variant="contained"
          color="error"
          startIcon={<CancelOutlinedIcon />}
          sx={{ textTransform: "none", mt: 1 }}
        >
          Close Account
        </Button>
      </Box>
    </Box>
  );
};

export default Settings;

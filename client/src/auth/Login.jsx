import React from "react";
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
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const formSchema = z.object({
  username: z.string().min(1, "Username is required"),
  password: z.string().min(1, "Password is required"),
});

const Login = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = (values) => {
    console.log(values);

    form.reset();
  };

  return (
    <div>
      <Box sx={{ py: 10, display: "flex", justifyContent: "center" }}>
        <Card variant="outlined" sx={{ width: "400px", borderRadius: 2 }}>
          <CardContent component="form" onSubmit={form.handleSubmit(onSubmit)}>
            <Typography variant="h5" gutterBottom>
              Login
            </Typography>
            <Typography gutterBottom variant="body2" color="textSecondary">
              Enter your email and password below to login to your account
            </Typography>

            <Controller
              name="username"
              control={form.control}
              render={({ field }) => (
                <TextField
                  {...field}
                  margin="dense"
                  id="username"
                  label="Username"
                  variant="outlined"
                  error={!!form.formState.errors.username}
                  helperText={form.formState.errors.username?.message}
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
                  id="password"
                  label="Password"
                  variant="outlined"
                  error={!!form.formState.errors.password}
                  helperText={form.formState.errors.password?.message}
                  sx={{ width: "100%" }}
                />
              )}
            />

            <Button
              type="submit"
              variant="contained"
              sx={{ mt: 1, width: "100%", textTransform: "none" }}
            >
              Login
            </Button>

            <Divider sx={{ my: 2 }} />

            <Typography gutterBottom variant="body2" color="textSecondary">
              Don't have an account? , please register here
            </Typography>
            <Link href="/signUp">Sign Up</Link>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
};

export default Login;

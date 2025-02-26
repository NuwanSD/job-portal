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
  Checkbox,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const formSchema = z.object({
  username: z.string().min(1, "Username is required"),
  password: z.string().min(1, "Password is required"),
});

const Login = () => {
  const navigate = useNavigate();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = async (values) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/auth/login",
        values
      );

      console.log(response);
    } catch (error) {
      console.log(error);
    }

    form.reset();
  };

  return (
    <div>
      <Box
        sx={{
          py: 10,
          display: "flex",
          justifyContent: "center",
          background: "#EFF3FD",
        }}
      >
        <Card
          variant="outlined"
          sx={{
            width: "450px",
            borderRadius: 2,
            textAlign: "center",
            boxShadow: 2,
          }}
        >
          <CardContent
            component="form"
            onSubmit={form.handleSubmit(onSubmit)}
            sx={{ py: 5, px: 4 }}
          >
            <Typography variant="h5" sx={{ fontWeight: "medium" }} gutterBottom>
              JOBSPOTLIGHT
            </Typography>

            <Typography gutterBottom variant="body2" color="textSecondary">
              Fueling Ambitions, Shaping Futures
            </Typography>

            <Box sx={{ py: 2 }}>
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
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Box>
                <Checkbox sx={{ pl: 0 }} />
                Remember this Device
              </Box>
              <Button sx={{ textTransform: "none" }}>Frogot Password?</Button>
            </Box>

            <Button
              type="submit"
              variant="contained"
              size="large"
              sx={{ mt: 1, width: "100%", textTransform: "none" }}
            >
              Sign In
            </Button>

            <Divider sx={{ my: 3 }} />

            <Typography gutterBottom variant="body2" color="textSecondary">
              New to JOBSPOTLIGHT? <Link href="/signup">Sign up</Link>
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
};

export default Login;

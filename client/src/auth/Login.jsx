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

const Login = () => {
  return (
    <div>
      <Box sx={{ py: 10, display: "flex", justifyContent: "center" }}>
        <Card variant="outlined" sx={{ width: "400px", borderRadius: 2 }}>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              Login
            </Typography>
            <Typography gutterBottom variant="body2" color="textSecondary">
              Enter your email and password below to login to your account
            </Typography>
            <TextField
              margin="dense"
              id="email"
              label="Email"
              variant="outlined"
              type="email"
              sx={{ width: "100%" }}
            />
            <TextField
              margin="dense"
              id="password"
              label="Password"
              type="password"
              variant="outlined"
              sx={{ width: "100%" }}
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

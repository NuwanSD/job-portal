import { useState } from "react";
import {
  Box,
  TextField,
  Typography,
  Card,
  CardContent,
  Button,
  Link,
  Divider,
  CardActionArea,
  Radio,
} from "@mui/material";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [selectedRole, setSelectedRole] = useState("");

  const navigate = useNavigate();

  const handleCardClick = (role) => {
    setSelectedRole(role);
  };

  const handleButtonClick = () => {
    navigate("/register", { state: { role: selectedRole } });
  };

  return (
    <Box
      sx={{
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "100vh",
        background: "#f7f7f8",
      }}
    >
      <Typography variant="h4">Join as a job seeker or recruiter</Typography>

      <Box sx={{ display: { xs: "row", md: "flex" }, gap: 2, py: 4 }}>
        <Card
          variant="outlined"
          sx={{
            display: "flex",
            mb: { xs: 2, md: 0 },
            boxShadow: 2,
            "&:hover": { border: "2px solid black" },
            border: selectedRole === "recruiter" ? "2px solid black" : "",
          }}
        >
          <CardActionArea onClick={() => handleCardClick("recruiter")}>
            <CardContent>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <PeopleAltOutlinedIcon />
                <Radio
                  checked={selectedRole === "recruiter"}
                  value="recruiter"
                />
              </Box>
              <Typography variant="h6">
                I'm a recruiter, hiring for a project
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card
          variant="outlined"
          sx={{
            display: "flex",
            boxShadow: 2,
            "&:hover": { border: "2px solid black" },
            border: selectedRole === "candidate" ? "2px solid black" : "",
          }}
        >
          <CardActionArea onClick={() => handleCardClick("candidate")}>
            <CardContent>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <PeopleAltOutlinedIcon />
                <Radio
                  checked={selectedRole === "candidate"}
                  value="candidate"
                />
              </Box>
              <Typography variant="h6">
                I'm a candidate, looking for a job
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Box>

      <Box sx={{ my: 2 }}>
        <Button
          variant="contained"
          sx={{ textTransform: "none" }}
          onClick={handleButtonClick}
          disabled={!selectedRole}
        >
          {selectedRole == "candidate"
            ? "Join as a Candidate"
            : "Join as a Recruiter"}
        </Button>
      </Box>

      <Typography gutterBottom variant="body2" color="textSecondary">
        Already have an account? <Link href="/login">Login</Link>
      </Typography>
    </Box>
  );
};

export default SignUp;

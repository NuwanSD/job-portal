import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import Logo from "../../assets/facebook.svg";
import { getAllUsers } from "../../helper/helper";

function Companies() {
  const [recruiter, setRecruiter] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const users = await getAllUsers();

        const findRecruiters = users.data.filter((u) => u.role === "recruiter");

        setRecruiter(findRecruiters);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(min(250px, 100%), 1fr))",
        gap: 3,
      }}
    >
      {recruiter.map((company) => (
        <Card key={company.user_id} variant="outlined" sx={{ borderRadius: 2 }}>
          <CardContent sx={{ height: "100%" }}>
            <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
              <img src={Logo} alt="" width={82} />
              <Box>
                <Typography variant="h6" component="div" sx={{ ml: 0.5 }}>
                  {company.name}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <LocationOnOutlinedIcon />
                  {company.city}, {company.country}
                </Typography>
              </Box>
            </Box>
            <Button
              variant="outlined"
              sx={{ mt: 2, width: "100%" }}
              href={`/recruiters/${company.user_id}`}
            >
              Open Position
            </Button>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}

export default Companies;

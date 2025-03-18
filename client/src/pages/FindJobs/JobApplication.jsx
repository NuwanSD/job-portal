import { useState, useEffect } from "react";
import { getAllAppliedJob } from "../../helper/appliedJob";
import { getAllUsers, getUserById } from "../../helper/helper";
import { getAllJobSeekers, getJobSeekerById } from "../../helper/jobSeeker";
import { getAllPostedJob } from "../../helper/postedJob";
import { useAuthStore } from "../../store/authStore";
import {
  Card,
  CardContent,
  Box,
  Avatar,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemText,
  Link,
} from "@mui/material";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";

const JobApplication = () => {
  const [applicant, setApplicant] = useState([]);

  const { auth } = useAuthStore();

  const user_id = auth.userId;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const user = await getUserById({ user_id });
        const detials = await getJobSeekerById({ user_id });

        const userData = user.data[0];
        const userDetials = detials.data[0];

        const combinedData = {
          ...userData,
          description: userDetials ? userDetials.description : null,
          experience: userDetials ? userDetials.experience : null,
          education: userDetials ? userDetials.education : null,
        };

        setApplicant(combinedData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [user_id]);

  return (
    <Card variant="outlined" sx={{ my: 4 }}>
      <CardContent>
        <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
          <Avatar src="" />
          <Box>
            <Typography variant="h6">{applicant.name}</Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {applicant.description}
            </Typography>
          </Box>
        </Box>
        <Divider sx={{ py: 1 }} />
        <Box>
          <List>
            <ListItem disablePadding>
              <ListItemText
                primary={
                  <Typography sx={{ color: "text.secondary" }}>
                    Experience: {applicant.experience}
                  </Typography>
                }
              />
            </ListItem>
            <ListItem disablePadding>
              <ListItemText
                primary={
                  <Typography sx={{ color: "text.secondary" }}>
                    Education: {applicant.education}
                  </Typography>
                }
              />
            </ListItem>
          </List>
        </Box>
        <Link
          href="#"
          underline="none"
          sx={{ display: "flex", gap: 1, alignItems: "center" }}
        >
          <FileDownloadOutlinedIcon />
          Download Resume
        </Link>
      </CardContent>
    </Card>
  );
};
export default JobApplication;

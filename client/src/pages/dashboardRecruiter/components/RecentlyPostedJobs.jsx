import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { TableVirtuoso } from "react-virtuoso";
import Icon from "../../../assets/facebook.svg";
import { Box, Typography } from "@mui/material";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import { useAuthStore } from "../../../store/authStore";
import { getAllPostedJob, getPostedJobById } from "../../../helper/postedJob";
import { getAllJobs } from "../../../helper/job";
import { getAllAppliedJob } from "../../../helper/appliedJob";

const columns = [
  {
    width: 200,
    label: "JOBS",
    dataKey: "job",
  },
  {
    width: 50,
    label: "STATUS",
    dataKey: "status",
    numeric: true,
  },
  {
    width: 50,
    label: "APPLICATIONS",
    dataKey: "applications",
  },
  {
    width: 50,
    label: "ACTION",
    dataKey: "action",
  },
];

const VirtuosoTableComponents = {
  Scroller: React.forwardRef((props, ref) => (
    <TableContainer component={Paper} {...props} ref={ref} />
  )),
  Table: (props) => (
    <Table
      {...props}
      sx={{ borderCollapse: "separate", tableLayout: "fixed" }}
    />
  ),
  TableHead: React.forwardRef((props, ref) => (
    <TableHead {...props} ref={ref} />
  )),
  TableRow,
  TableBody: React.forwardRef((props, ref) => (
    <TableBody {...props} ref={ref} />
  )),
};

function fixedHeaderContent() {
  return (
    <TableRow>
      {columns.map((column) => (
        <TableCell
          key={column.dataKey}
          variant="head"
          align={column.numeric || false ? "right" : "left"}
          style={{ width: column.width }}
          sx={{
            backgroundColor: "background.paper",
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          {column.label}
        </TableCell>
      ))}
    </TableRow>
  );
}

function rowContent(_index, row) {
  return (
    <>
      {columns.map((column) => (
        <TableCell
          key={column.dataKey}
          align={column.numeric || false ? "right" : "left"}
        >
          {(() => {
            switch (column.dataKey) {
              case "job":
                return (
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <img src={Icon} alt="facebook" width={74} />
                    <Box>
                      <Typography variant="h6">{row.title}</Typography>
                      <Box sx={{ display: { md: "flex" }, gap: 1 }}>
                        <Typography variant="body2" color="textSecondary">
                          {row.job_type}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                );

              case "status":
                return (
                  <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                    {row.status === 1 ? (
                      <Box
                        sx={{ display: "flex", gap: 1, alignItems: "center" }}
                      >
                        <CheckCircleOutlineOutlinedIcon color="success" />
                        <Typography variant="body2">Active</Typography>
                      </Box>
                    ) : (
                      <Box
                        sx={{ display: "flex", gap: 1, alignItems: "center" }}
                      >
                        <CancelOutlinedIcon color="error" />
                        <Typography variant="body2">Inactive</Typography>
                      </Box>
                    )}
                  </Box>
                );

              case "applications":
                return (
                  <Typography variant="body2" color="textSecondary">
                    {row.applications}
                  </Typography>
                );

              case "action":
                return (
                  <Button
                    sx={{
                      textTransform: "none",
                      backgroundColor: "",
                      "&:hover": {
                        backgroundColor: "primary.main",
                        color: "white",
                      },
                    }}
                    variant="outlined"
                  >
                    View Details
                  </Button>
                );
            }
          })()}
        </TableCell>
      ))}
    </>
  );
}

export default function RecentlyPostedJobs() {
  const { auth } = useAuthStore();

  const [postedJob, setPostedJob] = useState([]);

  const user_id = auth.userId;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const postedJobs = await getAllPostedJob();
        const jobs = await getAllJobs();
        const appliedJobs = await getAllAppliedJob();

        const matchUser = postedJobs.data.filter((u) => u.user_id === user_id);

        const modifiedJob = matchUser.map((u) => {
          const filteredJob = jobs.data.find((p) => p.job_id === u.job_id);
          const applicant = appliedJobs.data.filter(
            (a) => a.posted_job_id === u.posted_job_id
          );

          return {
            ...u,
            title: filteredJob ? filteredJob.title : null,
            applications: applicant.length,
          };
        });

        setPostedJob(modifiedJob);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [user_id]);

  return (
    <Paper style={{ height: 400, width: "100%" }} variant="outlined">
      <TableVirtuoso
        data={postedJob}
        components={VirtuosoTableComponents}
        fixedHeaderContent={fixedHeaderContent}
        itemContent={rowContent}
      />
    </Paper>
  );
}

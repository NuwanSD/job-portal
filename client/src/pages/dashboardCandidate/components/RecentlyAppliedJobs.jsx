import * as React from "react";

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
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";

import { getAllAppliedJob } from "../../../helper/appliedJob";
import { useAuthStore } from "../../../store/authStore";
import { getAllPostedJob } from "../../../helper/postedJob";
import { getAllJobs } from "../../../helper/job";

const columns = [
  {
    width: 200,
    label: "Jobs",
    dataKey: "job",
  },
  {
    width: 50,
    label: "Date Applied",
    dataKey: "dateApplied",
  },
  {
    width: 50,
    label: "Status",
    dataKey: "status",
    numeric: true,
  },
  {
    width: 50,
    label: "Action",
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
          sx={{ backgroundColor: "background.paper", textAlign: "center" }}
        >
          {column.label}
        </TableCell>
      ))}
    </TableRow>
  );
}

function rowContent(_index, row) {
  return (
    <React.Fragment>
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
                          {row.job_location}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                          $ {row.salary}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                );
              case "dateApplied":
                return (
                  <Typography variant="body2" color="textSecondary">
                    {row.applied_date}
                  </Typography>
                );
              case "status":
                return (
                  <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                    <CheckOutlinedIcon fontSize="1" />
                    {row.status === 1 ? (
                      <Typography variant="body2">Available</Typography>
                    ) : (
                      <Typography variant="body2">Not Available</Typography>
                    )}
                  </Box>
                );
              case "action":
                return (
                  <Button
                    sx={{ textTransform: "none" }}
                    variant="outlined"
                    href={`/job/${row.posted_job_id}`}
                  >
                    View Details
                  </Button>
                );
            }
          })()}
        </TableCell>
      ))}
    </React.Fragment>
  );
}

export default function RecentlyAppliedJobs() {
  const [appliedJob, setAppliedJob] = React.useState([]);

  const { auth } = useAuthStore();

  const user_id = auth.userId;

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const appliedJobs = await getAllAppliedJob();

        const userMatch = appliedJobs.data.filter((u) => u.user_id === user_id);

        const postedJobs = await getAllPostedJob();

        const jobs = await getAllJobs();

        const filteredJob = userMatch.map((u) => {
          const matchPostedJob = postedJobs.data.find(
            (p) => p.posted_job_id === u.posted_job_id
          );

          return {
            ...u,
            job_id: matchPostedJob ? matchPostedJob.job_id : null,
            job_location: matchPostedJob ? matchPostedJob.job_location : null,
            status: matchPostedJob ? matchPostedJob.status : null,
            salary: matchPostedJob ? matchPostedJob.salary : null,
          };
        });

        const findJobs = filteredJob.map((j) => {
          const modifiedData = jobs.data.find((m) => m.job_id === j.job_id);

          return {
            ...j,
            title: modifiedData ? modifiedData.title : null,
          };
        });

        setAppliedJob(findJobs);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <Paper style={{ height: 400, width: "100%" }}>
      <TableVirtuoso
        data={appliedJob}
        components={VirtuosoTableComponents}
        fixedHeaderContent={fixedHeaderContent}
        itemContent={rowContent}
      />
    </Paper>
  );
}

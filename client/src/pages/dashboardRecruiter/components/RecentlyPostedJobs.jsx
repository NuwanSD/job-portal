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
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";

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

const rows = [
  {
    id: 1,
    job: "Engineer",
    status: "Active",
    applications: "798 Applications",
  },
  {
    id: 2,
    job: "Doctor",
    status: "Active",
    applications: "798 Applications",
  },
  { id: 3, job: "Teacher", status: "Active", applications: "798 Applications" },
  {
    id: 4,
    job: "Artist",
    status: "Expire",
    applications: "798 Applications",
  },
  { id: 5, job: "Chef", status: "Active", applications: "798 Applications" },
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
                      <Typography variant="h6">{row.job}</Typography>
                      <Box sx={{ display: { md: "flex" }, gap: 1 }}>
                        <Typography variant="body2" color="textSecondary">
                          Full Time
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                          27 days remaing
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                );

              case "status":
                return (
                  <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                    {row.status === "Active" ? (
                      <CheckCircleOutlineOutlinedIcon color="success" />
                    ) : (
                      <CancelOutlinedIcon color="error" />
                    )}
                    <Typography variant="body2">{row.status}</Typography>
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
    </React.Fragment>
  );
}

export default function RecentlyPostedJobs() {
  return (
    <Paper style={{ height: 400, width: "100%" }}>
      <TableVirtuoso
        data={rows}
        components={VirtuosoTableComponents}
        fixedHeaderContent={fixedHeaderContent}
        itemContent={rowContent}
      />
    </Paper>
  );
}

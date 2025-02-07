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

const rows = [
  { id: 1, job: "Engineer", dateApplied: "2023-01-01", status: "Pending" },
  { id: 2, job: "Doctor", dateApplied: "2023-01-02", status: "Interviewed" },
  { id: 3, job: "Teacher", dateApplied: "2023-01-03", status: "Hired" },
  { id: 4, job: "Artist", dateApplied: "2023-01-04", status: "Rejected" },
  { id: 5, job: "Chef", dateApplied: "2023-01-05", status: "Pending" },
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
                      <Typography variant="h6">{row.job}</Typography>
                      <Box sx={{ display: { md: "flex" }, gap: 1 }}>
                        <Typography variant="body2" color="textSecondary">
                          Washington
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                          $50k-$80k/month
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                );
              case "dateApplied":
                return (
                  <Typography variant="body2" color="textSecondary">
                    {row.dateApplied}
                  </Typography>
                );
              case "status":
                return (
                  <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                    <CheckOutlinedIcon fontSize="1" />
                    <Typography variant="body2">{row.status}</Typography>
                  </Box>
                );
              case "action":
                return (
                  <Button sx={{ textTransform: "none" }} variant="outlined">
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

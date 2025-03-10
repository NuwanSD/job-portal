import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { Button } from "@mui/material";
import TuneIcon from "@mui/icons-material/Tune";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  display: "flex",
  alignItems: "center",
  // [theme.breakpoints.up("sm")]: {
  //   marginLeft: theme.spacing(3),
  //   width: "auto",
  // },
  [theme.breakpoints.down("xs")]: {
    flexDirection: "column",
    alignItems: "stretch",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  flex: 1,
  "& .MuiInputBase-input": {
    padding: theme.spacing(2, 2, 2, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "40ch",
    },
  },
}));

const ButtonContainer = styled("div")(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(0.5),
  py: theme.spacing(0.5),
  [theme.breakpoints.down("xs")]: {
    flexDirection: "column",
    alignItems: "stretch",
    width: "100%",
  },
}));

export default function SearchField() {
  return (
    <Box>
      <Search sx={{ border: 2, borderColor: "#1976D2" }}>
        <SearchIconWrapper>
          <SearchIcon sx={{ color: "#1976D2" }} />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search by: Job title, Position, Keyword"
          inputProps={{ "aria-label": "search" }}
        />
        <ButtonContainer sx={{ mr: 0.5 }}>
          <Button
            variant="contained"
            sx={{
              px: 2,
              py: 1.5,
              width: { xs: "100%", sm: "auto" },
              backgroundColor: "#000",
              color: "#fff",
            }}
          >
            <TuneIcon sx={{ mr: 1 }} /> Filters
          </Button>
          <Button
            variant="contained"
            sx={{ px: 2, py: 1.5, width: { xs: "100%", sm: "auto" } }}
          >
            Find Job
          </Button>
        </ButtonContainer>
      </Search>
    </Box>
  );
}

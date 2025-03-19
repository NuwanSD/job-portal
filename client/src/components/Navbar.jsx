import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { useNavigate } from "react-router-dom";
import useLoginStore from "../store/loginStore";
import { useAuthStore } from "../store/authStore";

const Navbar = () => {
  const { auth } = useAuthStore();

  const pages = [
    { name: "Home", path: "/" },
    { name: "Find Job", path: "/job" }, //unplan
    { name: "Recruiters", path: "/recruiters" },
    { name: "Candidates", path: "/candidate" },
    { name: "Contact Us", path: "/contact" },
    { name: "Dashboard", path: `/dashboard/${auth.userId}` },
  ];

  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const navigate = useNavigate();

  const { isLogin, logout } = useLoginStore();

  const handleLogout = () => {
    logout();

    navigate("/", { replace: true });
    handleCloseUserMenu();
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        p: 1.5,
      }}
    >
      <Container>
        <Toolbar disableGutters>
          <AdbIcon
            sx={{
              display: { xs: "none", md: "flex" },
              mr: 1,
              color: "#FFFFFF",
            }}
          />

          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontWeight: 700,
              color: "#FFFFFF",
              textDecoration: "none",
              textTransform: "uppercase",
            }}
          >
            JobSpotlight
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>

            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map((page) => (
                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                  <Typography
                    component="a"
                    href={page.path}
                    sx={{
                      textAlign: "center",
                      textDecoration: "none",
                      color: "inherit",
                    }}
                  >
                    {page.name}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <AdbIcon
            sx={{
              display: { xs: "flex", md: "none" },
              mr: 1,
              color: "#FFFFFF",
            }}
          />

          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontWeight: 700,
              color: "#FFFFFF",
              textDecoration: "none",
              textTransform: "uppercase",
            }}
          >
            JobSpotlight
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                onClick={handleCloseNavMenu}
                LinkComponent="a"
                href={page.path}
                sx={{
                  my: 2,
                  color: "inherit",
                  display: "block",
                  fontWeight: "bold",
                }}
              >
                {page.name}
              </Button>
            ))}
          </Box>

          {!isLogin ? (
            <Box
              sx={{
                flexGrow: 0,
                display: "flex",
                alignItems: "center",
                gap: 2,
              }}
            >
              <Button
                variant="outlined"
                color="inherit"
                sx={{ color: "inherit" }}
                LinkComponent="a"
                href="/login"
              >
                Login
              </Button>
              <Button
                variant="contained"
                sx={{ backgroundColor: "white", color: "#000" }}
                LinkComponent="a"
                href="/signup"
              >
                Sign Up
              </Button>
            </Box>
          ) : (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>

              <Menu
                sx={{ mt: "50px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography
                    component="a"
                    href={`/profile/${auth.userId}`}
                    sx={{ textDecoration: "none", color: "inherit" }}
                  >
                    Profile
                  </Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography
                    component="a"
                    href={`/dashboard/${auth.userId}`}
                    sx={{ textDecoration: "none", color: "inherit" }}
                  >
                    Dashboard
                  </Typography>
                </MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </Menu>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;

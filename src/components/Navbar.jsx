import React, { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";

const Navbar = () => {
  const items = ["About", "Experience", "Projects", "Contact"];
  const theme = useTheme();
  const isMedium = useMediaQuery(theme.breakpoints.down("md"));

  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "rgba(0, 0, 0, 0.2)",
        boxShadow: "0px 4px 5px rgba(123, 50, 255, 0.5)",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between", px: { xs: 2, md: 15 } }}>
        <Box component="img" src="/logo.png" height={45} alt="Logo" />

        {isMedium ? (
          <>
            <IconButton edge="end" color="inherit" onClick={handleMenuOpen}>
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              PaperProps={{
                sx: {
                  backgroundColor: "rgba(0, 0, 0, 0.8)", // Dark background for the dropdown menu
                },
              }}
            >
              {items.map((i) => (
                <MenuItem key={i} onClick={handleMenuClose}>
                  <a
                    href={`#${i}`}
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    {i}
                  </a>
                </MenuItem>
              ))}
            </Menu>
          </>
        ) : (
          <Stack direction="row" spacing={3}>
            {items.map((i) => (
              <Button
                key={i}
                href={`#${i}`}
                sx={{
                  color: "white",
                  textTransform: "none",
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": {
                    transform: "scale(1.1)",
                  },
                }}
              >
                {i}
              </Button>
            ))}
          </Stack>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

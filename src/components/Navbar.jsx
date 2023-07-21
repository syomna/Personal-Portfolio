import { Box, Popover, Stack, Typography, useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import GradientBox from "./GradientBox";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const items = ["About", "Experience", "Projects", "Contact"];
    const isMedium = useMediaQuery("(max-width: 900px)");
    
     const [isPopoverOpen, setPopoverOpen] = useState(false);

     const handlePopoverOpen = () => {
       setPopoverOpen(true);
     };

     const handlePopoverClose = () => {
       setPopoverOpen(false);
     };
  return (
    <Stack
      direction="row"
      position="fixed"
      alignItems="center"
      gap={isMedium ? "74vw" : "45vw"}
      sx={{ zIndex: 2 }}
    >
      <Box component="img" src="/logo.png" height={45} width={45} />
      <Stack direction="row" display={{ xs: "none", md: "flex" }} gap={2}>
        {items.map((i) => (
          <GradientBox key={i} customStyle={{ height: "2rem", width: "6rem" }}>
            <a href={`#${i}`}>
              <Typography  fontSize={12}>
                {i}
              </Typography>
            </a>
          </GradientBox>
        ))}
      </Stack>
      <MenuIcon
        onClick={handlePopoverOpen}
        sx={{ color: "white", display: { xs: "flex", md: "none" } }}
      />
      <Popover
        open={isPopoverOpen}
        onClose={handlePopoverClose}
        anchorReference="anchorPosition"
        anchorPosition={{ top: 50, left: 200 }}
        PaperProps={{
          sx: {
            backgroundColor: "black",
          },
        }}
      >
        {/* Your popover content goes here */}
        <Box p={2} sx={{ borderRadius: 4 }}>
          {items.map((i) => (
            <Box key={i} onClick={handlePopoverClose}>
              <a href={`#${i}`}>
                <Typography  fontSize={14} mt={1}>
                  {i}
                </Typography>
              </a>
            </Box>
          ))}
        </Box>
      </Popover>
    </Stack>
  );
};

export default Navbar;

import React from "react";
import { Box } from "@mui/material";
import { MainColor } from "../utils/constants";

const ButtonStyle = ({ children }) => {
  return (
    <Box
      sx={{
        width: { xs: "40%", md: "30%" },
        py: 1,
        backgroundColor: MainColor,
        borderRadius: "8px",
        "&:hover": { backgroundColor: "#5a44e0", cursor: "pointer" },
        textAlign: "center",
      }}
    >
      {children}
    </Box>
  );
};

export default ButtonStyle;

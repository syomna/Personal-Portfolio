import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { Grey } from "../utils/constants";
import MotionLayout from "./MotionLayout";
import Robot from "./Robot";
import cv from "../assets/Yomna-Salah-Flutter-Developer.pdf";
import ButtonStyle from "./ButtonStyle";
const Home = () => {
  return (
    <MotionLayout>
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box pt={{ xs: 15, md: 20 }} width={{ xs: "100%", md: "60%" }}>
          <Typography variant="h3" fontWeight="bold">
            Hi there, I'm <span style={{ color: "#d2b9f0" }}>Yomna </span>
          </Typography>
          <Typography fontSize={16} mt={4} mb={4} color={Grey}>
            Software Developer specializing in Cross-Platform Mobile
            Applications and Frontend Web Development.
          </Typography>

          <ButtonStyle>
            <Box
              onClick={() => {
                const fileName = "Yomna-Salah-Flutter-Developer.pdf";
                const filePath = cv;
                const link = document.createElement("a");
                link.setAttribute("download", fileName);
                link.setAttribute("href", filePath);
                link.click();
              }}
            >
              {" "}
              <Typography fontSize={14}>Download My Resume</Typography>
            </Box>
          </ButtonStyle>
        </Box>
        <Box height="60vh" width={{ xs: "100%", md: "40%" }}>
          <Robot />
        </Box>
      </Stack>
    </MotionLayout>
  );
};

export default Home;

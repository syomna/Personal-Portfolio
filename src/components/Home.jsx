import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { Grey } from "../utils/constants";
import GradientBox from "./GradientBox";
import MotionLayout from "./MotionLayout";
import Robot from "./Robot";
import cv from "../assets/Yomna_Salah_Software_Developer.pdf";
const Home = () => {
  return (
    <MotionLayout>
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box pt={{ xs: 15, md: 20 }} width={{ xs: "100%", md: "60%" }}>
          <Typography variant="h3" fontWeight="bold">
            Hi there, I'm <span style={{ color: "#d2b9f0" }}>Yomna </span>
          </Typography>
          <Typography fontSize={16} mt={4} color={Grey}>
            Software Developer | specialize in Frontend Web Development and
            Cross-platform Mobile Apps.
          </Typography>

          <GradientBox
            customStyle={{ width: { xs: "80%", md: "40%" }, py: 2, mt: 4 }}
          >
            <Box
              onClick={() => {
                const fileName = "Yomna_Salah_Software_Developer.pdf";
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
          </GradientBox>
        </Box>
        <Box height="60vh" width={{ xs: "100%", md: "40%" }}>
          <Robot />
        </Box>
      </Stack>
    </MotionLayout>
  );
};

export default Home;

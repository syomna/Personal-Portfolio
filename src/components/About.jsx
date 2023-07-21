import { Stack, Typography } from "@mui/material";
import React from "react";
import { Grey } from "../utils/constants";
import MotionLayout from "./MotionLayout";

const About = () => {
  return (
    <MotionLayout>
      <Stack pt={15} id="About" width={{xs: "100%" , md: "60%"}}>
        <Typography variant="h4" fontWeight="bold">About me</Typography>
        <Typography pt={2} color={Grey}>
          Passionate and versatile developer skilled in crafting innovative,
          user-friendly applications Dedicated to continuous learning and
          growth, leveraging industry knowledge to deliver exceptional results
          Committed to building visually stunning apps that seamlessly blend
          form and function for an exceptional user experience
        </Typography>
      </Stack>
    </MotionLayout>
  );
};

export default About;

import { Grid, Stack, Tab, Tabs, Typography } from "@mui/material";
import React, { useState } from "react";
import {
  Grey,
  MainColor,
  MobileProjects,
  WebProjects,
} from "../utils/constants";
import MotionLayout from "./MotionLayout";
import Project from "./Project";

const Projects = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleChange = (event, newValue) => {
    setActiveTab(newValue);
  };
  return (
    <MotionLayout>
      <Stack pt={10} id="Projects">
        <Typography fontWeight="bold" variant="h4">
          Projects
        </Typography>
        <Typography
          mt={2}
          fontSize={14}
          color={Grey}
          width={{ xs: "100%", md: "60%" }}
        >
          Explore my projects – from web development to mobile apps and beyond –
          showcasing my passion for innovation and problem-solving. Get a
          glimpse of my skills and expertise in the tech world,
        </Typography>
        <Tabs
          value={activeTab}
          onChange={handleChange}
          variant="fullWidth"
          centered
          sx={{
            marginY: 4,
            ".MuiTab-root": {
              color: "white",
              fontSize: "1.2rem",
              textTransform: "none",
            },
            ".MuiTab-root.Mui-selected": {
              color: "white",
              fontWeight: "bold",
            },
            ".MuiTabs-indicator": {
              backgroundColor: MainColor,
            },
          }}
        >
          <Tab label="Mobile Apps" />
          <Tab label="Web Apps" />
        </Tabs>

        {activeTab === 0 && (
          <Grid container spacing={4}>
            {MobileProjects.map((p, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Project p={p} />
              </Grid>
            ))}
          </Grid>
        )}

        {activeTab === 1 && (
          <Grid container spacing={4}>
            {WebProjects.map((p, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Project p={p} />
              </Grid>
            ))}
          </Grid>
        )}
      </Stack>
    </MotionLayout>
  );
};

export default Projects;

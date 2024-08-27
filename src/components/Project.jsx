import React, { useState } from "react";
import {
  Box,
  Stack,
  Typography,
  Dialog,
  DialogContent,
  IconButton,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkIcon from "@mui/icons-material/Link";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
import CloseIcon from "@mui/icons-material/Close";
import MotionLayout from "./MotionLayout";
import ButtonStyle from "./ButtonStyle";

const Project = ({ p }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <MotionLayout key={p.title}>
      <Stack key={p.title} alignItems="center" gap={2}>
        <Box
          component="img"
          src={p.img}
          alt={p.title}
          height={{ xs: "100%", md: "10rem", lg: "15rem" }}
          width={{ xs: "100%", md: "100%" }}
          sx={{
            borderRadius: 2,
            boxShadow: "0 0 0 1px #e96cb8, 0 0 0 1px #8167f8",
            cursor: "pointer", // Indicate that the image is clickable
          }}
          onClick={handleClickOpen} // Open the modal on click
        />

        <Dialog open={open} onClose={handleClose} maxWidth="lg">
          <DialogContent sx={{ position: "relative", padding: 0 }}>
            <IconButton
              onClick={handleClose}
              sx={{
                position: "absolute",
                top: 8,
                right: 8,
                color: "white",
                backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent black background
                borderRadius: "50%",
                padding: "5px", // Add padding for larger click area
                "&:hover": {
                  backgroundColor: "rgba(0, 0, 0, 0.7)", // Darker on hover
                },
              }}
            >
              <CloseIcon sx={{ fontSize: 24 }} /> {/* Increase icon size */}
            </IconButton>
            <Box
              component="img"
              src={p.img}
              alt={p.title}
              sx={{ width: "100%", height: "auto" }}
            />
          </DialogContent>
        </Dialog>

        <Box>
          <Typography fontSize={18} fontWeight="bold" pb={2}>
            {p.title}
          </Typography>
          <Box height={{ xs: "100%", md: "8rem", lg: "5rem" }}>
            <Typography fontSize={14}>{p.subTitle}</Typography>
          </Box>
          <Box height={{ xs: "100%", md: "6rem", lg: "3rem" }}>
            <Stack mt={2} mb={1} direction="row" gap={1}>
              <Typography fontSize={14}>Technologies:</Typography>
              <Stack direction="row" flexWrap="wrap" gap={1}>
                {p.tech.map((t) => (
                  <Typography key={t.name} fontSize={12} color={t.color}>
                    {t.name}
                  </Typography>
                ))}
              </Stack>
            </Stack>
          </Box>

          <Stack mt={2} direction="row" gap={2}>
            <ButtonStyle>
              <a
                href={p.isApp ? p.playStore : p.github}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex", // Make the anchor tag a flex container
                  alignItems: "center", // Center items vertically
                  justifyContent: "center", // Center items horizontally
                  textDecoration: "none", // Remove underline from text
                  width: "100%", // Ensure the anchor takes the full width
                  height: "100%", // Ensure the anchor takes the full height
                }}
              >
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="center"
                  gap={1}
                >
                  {p.isApp ? (
                    <GoogleIcon sx={{ fontSize: 20, color: "white" }} />
                  ) : (
                    <GitHubIcon sx={{ fontSize: 20, color: "white" }} />
                  )}
                  <Typography fontSize={12} sx={{ color: "white" }}>
                    {p.isApp ? "Google Play" : "GitHub"}
                  </Typography>
                </Stack>
              </a>
            </ButtonStyle>

            <ButtonStyle>
              <a
                href={p.isApp ? p.appStore : p.demo}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", color: "inherit" }} // Remove underline and inherit color
              >
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="center"
                  gap={1}
                >
                  {p.isApp ? (
                    <AppleIcon sx={{ fontSize: 20, color: "white" }} />
                  ) : (
                    <LinkIcon sx={{ fontSize: 20, color: "white" }} />
                  )}
                  <Typography fontSize={12} sx={{ color: "white" }}>
                    {p.isApp ? "App Store" : "Demo"}
                  </Typography>
                </Stack>
              </a>
            </ButtonStyle>
          </Stack>
        </Box>
      </Stack>
    </MotionLayout>
  );
};

export default Project;

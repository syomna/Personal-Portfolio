import React, { useState } from "react";
import { Box, Button, Grid, Stack, TextField, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import UpworkIcon from "@mui/icons-material/Work";
import { MainColor } from "../utils/constants";
import ButtonStyle from "./ButtonStyle";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const nameError = formData.name === "";
    const emailError = !validateEmail(formData.email);
    const messageError = formData.message === "";

    setErrors({
      name: nameError,
      email: emailError,
      message: messageError,
    });

    if (!nameError && !emailError && !messageError) {
      emailjs
        .send(
          "service_c69vg1p", // replace with your EmailJS service ID
          "template_y6mlthg", // replace with your EmailJS template ID
          formData,
          "m0NOuyDY7ba6cSqg5" // replace with your EmailJS user ID
        )
        .then(
          (result) => {
            toast.success("Email successfully sent!");
            setFormData({ name: "", email: "", message: "" });
          },
          (error) => {
            toast.error("Error sending email. Please try again later.");
          }
        );
    }
  };

  const textFieldSx = {
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: errors.name ? "red" : MainColor,
      borderWidth: "2px",
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: MainColor,
      borderWidth: "2px",
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: MainColor,
      borderWidth: "2px",
    },
  };

  return (
    <Grid container spacing={4} mt={5} id="Contact">
      <ToastContainer />
      <Grid item xs={12} md={6}>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            maxWidth: "500px",
            width: "100%",
            textAlign: "left",
          }}
        >
          <Typography variant="h4" mb={3}>
            Contact Me
          </Typography>
          <Stack spacing={3}>
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              name="name"
              value={formData.name}
              onChange={handleChange}
              error={errors.name}
              helperText={errors.name ? "Name is required" : ""}
              InputLabelProps={{
                style: { color: errors.name ? "red" : "#fff" },
              }}
              InputProps={{
                style: { color: "#fff" },
                classes: {
                  notchedOutline: {
                    borderColor: errors.name ? "red" : MainColor,
                  },
                },
                sx: textFieldSx,
              }}
            />

            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              name="email"
              value={formData.email}
              onChange={handleChange}
              error={errors.email}
              helperText={errors.email ? "Enter a valid email" : ""}
              InputLabelProps={{
                style: { color: errors.email ? "red" : "#fff" },
              }}
              InputProps={{
                style: { color: "#fff" },
                notchedOutline: {
                  borderColor: errors.email ? "red" : MainColor,
                  borderWidth: "2px",
                },
                sx: textFieldSx,
              }}
            />
            <TextField
              label="Message"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              name="message"
              value={formData.message}
              onChange={handleChange}
              error={errors.message}
              helperText={errors.message ? "Message is required" : ""}
              InputLabelProps={{
                style: { color: errors.message ? "red" : "#fff" },
              }}
              InputProps={{
                style: { color: "#fff" },
                notchedOutline: {
                  borderColor: errors.message ? "red" : MainColor,
                  borderWidth: "2px",
                },
                sx: textFieldSx,
              }}
            />
            <ButtonStyle>
              <Button type="submit" fullWidth sx={{ color: "white" }}>
                Send Message
              </Button>
            </ButtonStyle>
          </Stack>
        </Box>
      </Grid>

      <Grid item xs={12} md={6}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            height: "100%",
          }}
        >
          <Typography variant="h5" mb={2}>
            Contact Me Via
          </Typography>
          <Stack spacing={2} mt={5}>
            <Button
              href="https://github.com/syomna"
              target="_blank"
              startIcon={<GitHubIcon sx={{ color: "white" }} />}
              sx={{
                py: 1,
                backgroundColor: MainColor,
                borderRadius: "8px",
                "&:hover": { backgroundColor: "#5a44e0", cursor: "pointer" },
                textAlign: "center",
                width: "120%",
              }}
            >
              <Typography>GitHub</Typography>
            </Button>

            <Button
              href="https://www.linkedin.com/in/yomna-s/"
              target="_blank"
              startIcon={<LinkedInIcon sx={{ color: "white" }} />}
              sx={{
                py: 1,
                backgroundColor: MainColor,
                borderRadius: "8px",
                "&:hover": { backgroundColor: "#5a44e0", cursor: "pointer" },
                textAlign: "center",
                width: "120%",
              }}
            >
              <Typography>LinkedIn</Typography>
            </Button>
            <Button
              href="https://www.upwork.com/freelancers/~0155980773e7307264"
              target="_blank"
              startIcon={<UpworkIcon sx={{ color: "white" }} />}
              sx={{
                py: 1,
                backgroundColor: MainColor,
                borderRadius: "8px",
                "&:hover": { backgroundColor: "#5a44e0", cursor: "pointer" },
                textAlign: "center",
                width: "120%",
              }}
            >
              <Typography>Upwork</Typography>
            </Button>
          </Stack>
        </Box>
      </Grid>
    </Grid>
  );
};

export default ContactForm;

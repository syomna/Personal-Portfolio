import { Box, createTheme, ThemeProvider } from "@mui/material";
import React from "react";
import AnimatedCharacterBackground from "./AnimatedCharacterBackground";
import About from "./components/About";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import ContactForm from "./components/ContactForm";

const theme = createTheme({
  typography: {
    fontFamily: "Courier Prime, monospace",
    allVariants: {
      color: "#FFFFFF", // Set the default text color to white for all Typography components
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box>
        {/* Animated background, positioned absolutely behind content */}
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 0, // Ensure this is behind everything else
          }}
        >
          <AnimatedCharacterBackground />
        </Box>

        {/* Content wrapper, including the Navbar and page sections */}
        <Box
          sx={{
            position: "relative",
            zIndex: 1,
            minHeight: "100vh",
          }}
        >
          <Navbar />
          <Box
            sx={{
              pt: 4,
              px: { xs: 2, md: 15 },
              py: 4,
            }}
          >
            <Home />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <ContactForm />
          </Box>
          <Footer />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;

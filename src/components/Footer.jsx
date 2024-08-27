import { Favorite } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      mt={5}
      py={4}
      px={{ xs: 2, md: 10 }}
      sx={{ backgroundColor: "rgba(0,0,0,0.4)", color: "white" }}
    >
      <Box display="flex" alignItems="center">
        <Box
          component="img"
          src="/logo.png"
          alt="logo"
          height={30}
          width={30}
          mr={2}
        />
        <span>Yomna Salah &copy; {new Date().getFullYear()}</span>
      </Box>

      <Typography>Made with {<Favorite sx={{ color: "red" }} />}</Typography>
    </Box>
  );
};

export default Footer;

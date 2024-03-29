import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
 primary: {
      main: "#030304",
    },
    secondary: {
      main: "#010e20",
    },
    accent: {
      main: "#212121",
    },
    text: {
      primary: "white",
      secondary: "#90A4AE",
    },
    button: {
      main: "#00838F",
    },
    white: "#FFFFFF"
  },

  fonts: {
    body: "'Roboto', sans-serif",
    heading: "'Roboto', sans-serif",
  },
  
  
});

export default theme;
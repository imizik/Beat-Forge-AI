import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    primary: {
      main: "#212121",
    },
    secondary: {
      main: "#424242",
    },
    accent: {
      main: "#FF5722",
    },
    text: {
      primary: "#BDBDBD",
      secondary: "#757575",
    },
    button: {
      main: "#795548",
    },
  }
});

export default theme;
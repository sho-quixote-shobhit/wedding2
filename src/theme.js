import { extendTheme } from '@chakra-ui/react';

import "@fontsource/cormorant";
import "@fontsource/roboto";

const theme = extendTheme({
  fonts: {
    body: "'cormorant', sans-serif",
  },
});

export default theme;

import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    body: 'Open Sans, sans-serif',
    heading: 'Open Sans, sans-serif',
    mono: 'Open Sans, sans-serif',
  },
  colors: {
    darkColor: '#000000',
    lightColor: '#FFFFFF',
  },
});

export default theme;

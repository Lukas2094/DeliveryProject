import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';

import { extendTheme } from '@chakra-ui/react'

function MyApp({ Component, pageProps }: AppProps) {

  const colors = {
    brand: {
      900: '#F5F5F5',
    },
  }
  
  const theme = extendTheme({ colors })

  return (
      <ChakraProvider theme={theme}>
            <Component {...pageProps} />
      </ChakraProvider>
  );
}

export default MyApp;

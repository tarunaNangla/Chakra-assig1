import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  GridItem,
  Spacer
} from '@chakra-ui/react';
// import pic from './Component/Pic1';
import Pic from './Component/Pic1';
import Pics from './Component/Pic2';
// import { ColorModeSwitcher } from './ColorModeSwitcher';
// import { Logo } from './Logo';

function App() {
  return (
    <ChakraProvider >
   
     <Pic />
     <Pics />

    </ChakraProvider>
  );
}

export default App;

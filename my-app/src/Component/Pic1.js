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
  Spacer,
  Center
} from '@chakra-ui/react';
// import { ColorModeSwitcher } from './ColorModeSwitcher';
// import { Logo } from './Logo';

function Pic() {
  return (
    <ChakraProvider >
        <Center h="16">Picture 2</Center>
      <Grid gap="10px" h="500px" templateColumns='repeat(3,1fr)'templateRows='repeat(3,1fr)'>
           <GridItem rowSpan={[1,2]} colSpan={2}  bg='pink'></GridItem>
           <GridItem rowSpan={[1,3]}  colSpan={[2,1]} bg='tomato'></GridItem>
           <GridItem rowSpan={[1,1]} colSpan={2} bg='blue'></GridItem>
        </Grid>
         <Spacer />
      


    </ChakraProvider>
  );
}

export default Pic;
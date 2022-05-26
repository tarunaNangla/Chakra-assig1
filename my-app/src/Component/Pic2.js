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
  Flex,
  Center
} from '@chakra-ui/react';
// import { ColorModeSwitcher } from './ColorModeSwitcher';
// import { Logo } from './Logo';

function Pics() {
  return (

    <ChakraProvider >
        <Center h="16">Picture 3</Center>
     <Grid h="400px" gap={4} templateColumns='repeat(4,1fr)' templaterows='repeat(1,1fr)'>
         <GridItem rowSpan={[1,1]} colSpan={[1,2]} bg="yellow"></GridItem>
         <GridItem rowSpan={[1,1]} colSpan={[1,2]} bg="yellow"></GridItem>
     </Grid>
     <Grid h="400px" gap={4} templaterows='repeat(1,1fr) ' pt={4}  pb={4}>
         <GridItem rowSpan={[1]} colSpan={[1]} bg="pink.300"></GridItem>

     </Grid>
     <Flex  h="200px" gap='6' flexDirection={["column","row"]}>
    
         <GridItem  w={["200","500px"]} bg="blue">.</GridItem>
         <GridItem  w={["200","500px"]} bg="blue">.</GridItem>
         <GridItem  w={["500px"]} bg="blue"></GridItem>
  </Flex >
   
    </ChakraProvider>
  );
}

export default Pics;
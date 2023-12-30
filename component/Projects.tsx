'use client'

import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  VisuallyHidden,
  List,
  ListItem,
} from '@chakra-ui/react'
import { MdLocalShipping } from 'react-icons/md'

export default function Projects() {
  return (
    <Container maxW={'8xl'}>
        {/* //portfolio */}
      <SimpleGrid
        columns={{ base: 1, lg: 1}}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 15 }}>
        <Flex>
          <Image
            alt={'portfolio image'}
            src={
              'Portfolio.png'
            }
            fit={'cover'}
            align={'center'}
            w={'100%'}
            h={{ base: '80vh', sm: '80vh', lg: '800px' }}
          />

        </Flex>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={'header'}>
            <Heading
              lineHeight={1.1}
              fontWeight={400}
              fontSize={{ base: '4xl', sm: '4xl', lg: '5xl' }}>
              Portfolio
            </Heading>
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={'column'}
            divider={
              <StackDivider borderColor={useColorModeValue('gray.200', 'gray.600')} />
            }>
            <VStack spacing={{ base: 4, sm: 6 }} align={'left'}>
              <Text fontSize={'lg'}>
                My first portfolio website, with plain HTML, CSS and JavaScript.
              </Text>
            </VStack>

            
          </Stack>

          <Button
          as="a" href={'https://houwinman.com/'} target={'_blank'}
            rounded={'none'}
            w={'full'}
            mt={8}
            size={'xl'}
            py={'7'}
            bg={useColorModeValue('gray.900', 'gray.50')}
            color={useColorModeValue('white', 'gray.900')}
            _hover={{
                transform: 'translateY(2px)',
                bg: useColorModeValue('gray.700', 'gray.50'),
              boxShadow: 'lg',
            }}>
             Link to website
          </Button>
        </Stack>
      </SimpleGrid>
            {/* //ambitieuzeplanten */}
      <SimpleGrid
        columns={{ base: 1, lg: 1}}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 100, md: 200 }}>
        <Flex>
          <Image
            alt={'Ambietieuze-planten image'}
            src={
              'Ambitieuzeplanten.png'
            }
            fit={'cover'}
            align={'center'}
            w={'100%'}
            h={{ base: '80vh', sm: '80vh', lg: '800px' }}
          />
        </Flex>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={'header'}>
            <Heading
              lineHeight={1.1}
              fontWeight={400}
              fontSize={{ base: '4xl', sm: '4xl', lg: '5xl' }}>
              Ambitieuzeplanten
            </Heading>
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={'column'}
            divider={
              <StackDivider borderColor={useColorModeValue('gray.200', 'gray.600')} />
            }>
            <VStack spacing={{ base: 4, sm: 6 }} align={'left'}>
              <Text fontSize={'lg'}>
              A group project displaying each individual's process in a creative manner, incorporating elements such as micro-animations, 3D, and character design within Webflow.
              </Text>
            </VStack>

            
          </Stack>

          <Button
          as="a" href={'https://ambitieuzeplanten.webflow.io/'} target={'_blank'}
            rounded={'none'}
            w={'full'}
            mt={8}
            size={'xl'}
            py={'7'}
            bg={useColorModeValue('gray.900', 'gray.50')}
            color={useColorModeValue('white', 'gray.900')}
            _hover={{
                transform: 'translateY(2px)',
                bg: useColorModeValue('gray.700', 'gray.50'),
              boxShadow: 'lg',
            }}>
         Link to website
          </Button>
        </Stack>
      </SimpleGrid>

          {/* //Photography */}
          <SimpleGrid
        columns={{ base: 1, lg: 1}}
        spacing={{ base: 8, md: 10 }} 
        py={{ base: 18, md: 15 }}>
           
        <Flex>
          <Image
            alt={'Photography image'}
            src={
              'Photography.png'
            }
            fit={'cover'}
            align={'center'}
            w={'100%'}
            h={{ base: '80vh', sm: '80vh', lg: '800px' }}
            py={{ base: 18, md: 15 }}
            px={{ base: 18, md: 15 }} 
            bg={useColorModeValue('gray.200', 'gray.50')}
          />
        </Flex>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={'header'}>
            <Heading
              lineHeight={1.1}
              fontWeight={400}
              fontSize={{ base: '4xl', sm: '4xl', lg: '5xl' }}>
              Photography
            </Heading>
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={'column'}
            divider={
              <StackDivider borderColor={useColorModeValue('gray.200', 'gray.600')} />
            }>
            <VStack spacing={{ base: 4, sm: 6 }} align={'left'}>
              <Text fontSize={'lg'}>
              A portfolio website showcasing the photos I've taken during my photography minor in ReactJS and TypeScript (not responsive).
              </Text>
            </VStack>

            
          </Stack>

          <Button
          as="a" href={'https://fotografie-portfolio-hwm.netlify.app/'} target={'_blank'}
            rounded={'none'}
            w={'full'}
            mt={8}
            size={'xl'}
            py={'7'}
            bg={useColorModeValue('gray.900', 'gray.50')}
            color={useColorModeValue('white', 'gray.900')}
            _hover={{
              transform: 'translateY(2px)',
              bg: useColorModeValue('gray.700', 'gray.50'),
              boxShadow: 'lg',
            }}>
            Link to website
          </Button>
        </Stack>
      </SimpleGrid>

      {/* //HCI */}
      <SimpleGrid
        columns={{ base: 1, lg: 1}}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 100, md: 200 }}>
        <Flex>
          <Image
            alt={'product image'}
            src={
              'HCI.png'
            }
            fit={'cover'}
            align={'center'}
            w={'100%'}
            h={{ base: '80vh', sm: '80vh', lg: '800px' }}
          />
        </Flex>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={'header'}>
            <Heading
              lineHeight={1.1}
              fontWeight={400}
              fontSize={{ base: '4xl', sm: '4xl', lg: '5xl' }}>
              HCI Technologies
            </Heading>
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={'column'}
            divider={
              <StackDivider borderColor={useColorModeValue('gray.200', 'gray.600')} />
            }>
            <VStack spacing={{ base: 4, sm: 6 }} align={'left'}>
              <Text fontSize={'lg'}>
              A website where I've documented all my progress from the HCI Technologies course using HTML, CSS, and JS.
              </Text>
            </VStack>

            
          </Stack>

          <Button
          as="a" href={'https://hci-houwin-portfolio.netlify.app/'} target={'_blank'}
            rounded={'none'}
            w={'full'}
            mt={8}
            size={'xl'}
            py={'7'}
            bg={useColorModeValue('gray.900', 'gray.50')}
            color={useColorModeValue('white', 'gray.900')}
            _hover={{
              transform: 'translateY(2px)',
              bg: useColorModeValue('gray.700', 'gray.50'),
              boxShadow: 'lg',
            }}>
            Link to website
          </Button>
        </Stack>
      </SimpleGrid>


    </Container>
  )
}
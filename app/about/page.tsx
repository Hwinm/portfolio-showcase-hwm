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
    <Container maxW={'7xl'}>
        {/* //portfolio */}
      <SimpleGrid
        columns={{ base: 1, lg: 2}}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 100, md: 200}}>
        <Flex>
          <Image
            alt={'profile image'}
            src={
              'pf.jpg'
            }
            fit={'cover'}
            align={'center'}
            w={{ base: '100%', md: '60%'}}
            h={{ base: '400px', sm: '400px', lg: '500px' }}
          />

        </Flex>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={'header'}>
            <Heading
              lineHeight={1.1}
              fontWeight={400}
              fontSize={{ base: '4xl', sm: '4xl', lg: '5xl' }}>
              About Me
            </Heading>
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={'column'}
            divider={
              <StackDivider borderColor={useColorModeValue('gray.200', 'gray.600')} />
            }>
            <VStack spacing={{ base: 4, sm: 6 }} align={'left'}>
              <Text fontSize={'lg'} lineHeight={'10'}>
              Hi my name is Houwin, and currently, I&apos;m studying Communication and Multimedia Design at The Hague University of Applied Sciences. My interests lie in designing and building interactive digital products. I am someone who enjoys collaborating to receive feedback on what I can improve or what I already excel at, aiming to bring out my best qualities to perform my work optimally. Furthermore, I work diligently to complete my tasks as efficiently and effectively as possible. Additionally, I take pleasure in working with joy.
              </Text>
            </VStack>

            
          </Stack>

          <Button
          as="a" href={'/'} 
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
             See my work
          </Button>
        </Stack>
      </SimpleGrid>
    </Container>
  )
}
'use client'

import {
  Box,
  chakra,
  Container,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  Input,
  IconButton,
  useColorModeValue,
} from '@chakra-ui/react'
import { ReactNode } from 'react'
// import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
// import { BiMailSend } from 'react-icons/bi'

const Logo = (props: any) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
   HWM
  </Text>
  )
}

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode
  label: string
  href: string
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  )
}

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  )
}

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue('RGBA(0, 0, 0, 0.04)', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container as={Stack} maxW={'7xl'} py={20}>
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '2fr 2fr 2fr' }}
          spacing={8}>
          <Stack spacing={6}>
            <Box>
              <Logo color={useColorModeValue('gray.700', 'white')} />
            </Box>
            <Text fontSize={'sm'}>© 2023 HWM. All rights reserved</Text>
            {/* <Stack direction={'row'} spacing={6}>
              <SocialButton label={'Twitter'} href={'#'}>
                <FaTwitter />
              </SocialButton>
              <SocialButton label={'YouTube'} href={'#'}>
                <FaYoutube />
              </SocialButton>
              <SocialButton label={'Instagram'} href={'#'}>
                <FaInstagram />
              </SocialButton>
            </Stack> */}
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Navigation</ListHeader>
            <Box   _hover={{
        textDecoration: 'none',
        textColor: useColorModeValue('gray.500', 'gray.700'),
      }} as="a" href={'/'}>
              Work
            </Box>
            <Box   _hover={{
        textDecoration: 'none',
        textColor: useColorModeValue('gray.500', 'gray.700'),
      }} as="a" href={'/about'}>
              About Me
            </Box>
            <Box   _hover={{
        textDecoration: 'none',
        textColor: useColorModeValue('gray.500', 'gray.700'),
      }} as="a" href={'/contact'}>
              Contact 
            </Box>
          </Stack>

          <Stack align={'flex-start'} w={'full'}>
            <ListHeader>Collaborate with me</ListHeader>
            <Stack direction={'row'}>
            <Box textDecoration={'underline'}>
              houwinman@gmail.com
            </Box>
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  )
}

'use client'

import {
  Box,
  Flex,
  Button,
  HStack,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack,
  Container,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'

interface Props {
  children: React.ReactNode
}

const Links = [ { name: 'Work', href: '/' },
{ name: 'About', href: '/about' },
{ name: 'Contact', href: '/contact' },]

const NavLink = (props: { href: string; children: React.ReactNode }) => {
  const { href, children } = props

  return (
    <Box
      as="a"
      px={2}
      py={1}
      _hover={{
        textDecoration: 'none',
        textColor: useColorModeValue('gray.500', 'gray.700'),
      }}
      href={href}>
      {children}
    </Box>
  )
}

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Box bg={useColorModeValue('white', 'white')} position={'fixed'} width={'100%'} zIndex={'1'} height={{base: '20', md:'100'}}>
        <Container maxW={'7xl'}> 
        <Flex h={20} alignItems={'center'} justifyContent={'space-between'} height={{base: '20', md:'100'}}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon boxSize={'5'} /> : <HamburgerIcon boxSize={'8'}/>}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
            bg={'none'}
          />
         
          <HStack spacing={8} alignItems={'center'}>
            <Box>
                <Button fontWeight={'medium'} px={'0'}fontSize={{base:'25',md:'25'}} as={'a'} href="/" variant={'Link'}>HWM</Button>
            </Box>
          </HStack> 
          <HStack fontWeight={'light'} fontSize={'18'} as={'nav'} spacing={4} justifyContent={'end'} display={{ base: 'none', md: 'flex' }} >
              {Links.map((link) => (
                <NavLink key={link.name} href={link.href}>{link.name}</NavLink>
              ))}
            </HStack>
       
        </Flex>
           </Container> 
        {isOpen ? (
          
          <Box pb={4} px={'4'}display={{ md: 'none' }} height={'100vh'} bg={useColorModeValue('white', 'white')}>
            <Stack as={'nav'} spacing={4} fontSize={'30'}>
              {Links.map((link) => (
                <NavLink key={link.name} href={link.href}>{link.name}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}    
      </Box>
    </>
  )
}
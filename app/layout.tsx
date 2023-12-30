
"use Client"
import type { Metadata } from 'next'

import Navbar from '@/component/Navbar'

import Footer from '@/component/Footer' 

import { Inter } from 'next/font/google'
import * as React from 'react'

import { ChakraProvider } from '@chakra-ui/react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portfolio hwm',
  description: 'showcase',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ChakraProvider>
        <Navbar/>
        {children} 
        <Footer/>
        </ChakraProvider>
      </body>
    </html>
  )
}

import Footer from './componnets/Footer'
import Navbar from './componnets/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import ToastProvider from './provider/ToastProvider'





export const metadata: Metadata = {
  title: 'Car hub',
  description: 'Discover the best cars in the  world.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='relative'>
        <ToastProvider/>
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}

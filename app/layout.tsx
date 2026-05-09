import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SnipSnout — At-Home Pet Grooming',
  description: 'Premium at-home pet grooming service. Book bath, haircut & full grooming for your dog or cat in Delhi.',
  keywords: 'pet grooming, dog grooming, cat grooming, at home grooming, Delhi',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}

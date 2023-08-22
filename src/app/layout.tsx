import MainMenu from '@/components/MainMenu'
import './globals.css'
import type { Metadata } from 'next'
import { Livvic } from 'next/font/google'

const inter = Livvic({
  subsets: ['latin'],
  weight: '100'
})

export const metadata: Metadata = {
  title: "Kosta's portfolio",
  description: 'a app to display my work and cv',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MainMenu/>
        {children}
        </body>
    </html>
  )
}

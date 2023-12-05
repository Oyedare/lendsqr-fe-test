import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.scss'


export const metadata: Metadata = {
  title: 'LendSqr Assesment',
  description: 'LendSqr Assesment',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
